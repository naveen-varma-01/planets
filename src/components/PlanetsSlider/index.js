// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="bg-cont" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} details={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
