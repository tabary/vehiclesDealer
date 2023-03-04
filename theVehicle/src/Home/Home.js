import axios from 'axios'
import { useState, useEffect } from 'react'
import VehicleThumbnail from '../VehicleThumbnail/VehicleThumbnail'




function Home(props) {

    const [vehicles, setVehicles] = useState([]) // At the begining we do not have vehicles
   
    async function getVehicles() {  // The function is asynchronous
      const vehicles = (await axios.get('http://localhost:8000/vehicles')).data
      setVehicles(vehicles)
      console.log(vehicles)
    }
    
    useEffect(() => { // this is a hook called everytime the function is rendered again
                      // Don't forget to import useEffect
      getVehicles()
    }, []);
    
     return (
         <div className='home'>
             <h2>This is the home page</h2>
             {vehicles.map( (x) => <VehicleThumbnail key={x.id} {...x} />

             )}
             
         </div>
     )
 
 }
 
 export default Home;
 