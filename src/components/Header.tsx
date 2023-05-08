import styled from 'styled-components'
import { NavLink, useNavigation } from 'react-router-dom'
const menu = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/about',
    name: '关于我们',
  },
]
const Header = () => {
  // const navigate = useNavigate()
  const navigation = useNavigation()
  return (
    <HeaderBox>
      <ul className="ui">
        {menu.map((menuItem) => {
          return (
            <NavLink key={menuItem.path} to={menuItem.path}>
              <li className="li">{menuItem.name}</li>
            </NavLink>
          )
        })}
      </ul>
    </HeaderBox>
  )
}
const HeaderBox = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #272633;
  .ui {
    height: 100%;
    display: flex;
    list-style: none;
    a {
      color: #fff;
      text-decoration: none;
    }
    .active {
      background-color: #efc0a0;
      color: #000;
    }
    .pending {
      background-color: red;
      color: red;
    }
    .li {
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* &:hover {
        background-color: #4d3f36;
        color: #000;
      } */
    }
  }
`
export default Header
