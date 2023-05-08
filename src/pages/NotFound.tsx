import styled from 'styled-components'
import { useRouteError } from 'react-router-dom'
interface ErrorInfo {
  status: number
  statusText: string
}

const Error = () => {
  const error: ErrorInfo = useRouteError() as ErrorInfo
  return (
    <ErrorBox>
      { error.status }  {error.statusText}
    </ErrorBox>
  )
} 

const ErrorBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`
export default Error