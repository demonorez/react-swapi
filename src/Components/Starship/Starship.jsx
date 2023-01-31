import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Starship.css'

const StarshipDetails = () => {
  const location  = useLocation()

  return (
    <>
    <div className='starship'>
      <h2>Starship Details Vroom Vroom</h2>
      <h3>Name: {location.state.starship.name}</h3>
      <h4>Model: {location.state.starship.model}</h4>
      <Link to="/" className='link'>Back to Ships</Link>
    </div>
    </>
  )
}



export default StarshipDetails