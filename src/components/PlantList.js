import React from 'react'
import Plant from './Plant'
import Loader from './Loader'

const PlantList = ({plants, loading}) => {
    
    return  loading ? (<Loader />) :(
    <div className="plantlist">
          { 
          plants.map(plant => (
        <Plant key={plant.id} {...plant}/>
        ))}
    </div>  
    )
}

export default PlantList
