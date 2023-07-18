import { Image } from 'react-bootstrap'
import skaters from '../images/skateboarders1.jpg'

const Landing = () => {
  return (
    <div className="Landing">
      <Image src={skaters} fluid />
    </div>
  )
}

export default Landing
