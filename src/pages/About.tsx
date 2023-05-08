import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>About</h1>
      <button type="button" onClick={() => navigate(-1)}>回退</button>
    </div>
  )
}


export const Component = () => <About></About>
export default About
