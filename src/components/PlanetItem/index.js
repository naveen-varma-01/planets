// Write your code here

import './index.css'

const PlanetItem = props => {
  const {details} = props
  console.log(details)
  const {name, imageUrl, description} = details

  return (
    <div className="cont">
      <img src={imageUrl} alt={name} className="img" />
      <p className="name">{name}</p>
      <p className="para">{description}</p>
    </div>
  )
}
export default PlanetItem
