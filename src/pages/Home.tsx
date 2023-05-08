import styled from 'styled-components'
import { useSelector, useDispatch} from 'react-redux'
import { incrementByAmount } from '@/store/modules/counter'
interface Counter {
  counter: {
    value: number
  }
}

const Home = () => {
  const count = useSelector((state: Counter) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <HomeBox>
      <div>{count}</div>
      <button onClick={() => dispatch(incrementByAmount(20))}>增加</button>
    </HomeBox>
  )
}



const HomeBox = styled.div`
  .live-box {
    width: 100%;
    height: 500px;
    background-color: green;
  }
  .content-box {
    width: 1200px;
    margin: auto;
  }
  .video-list {
    display: flex;
    justify-content: space-between;
  }
`
const ShortVideoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 200px;
  overflow: hidden;
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0px 0px 7px #eee;
  .video-image {
    width: 224px;
    overflow: hidden;
    position: relative;
    height: 136px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      position: absolute;
      right: 15px;
      top: 15px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 15px;
      display: inline-block;
      padding: 2px 6px;
      color: #fff;
    }
  }
  .video-desc {
    box-sizing: border-box;
    padding: 6px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`
export default Home
