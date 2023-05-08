import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'



function App() {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}


const MainContainer = styled.div`
  
`
export default App
