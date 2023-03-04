

import './Vehicle.css'
import Wheel from '../Wheel/Wheel';
import Engine from '../Engine/Engine'

import {useParams, useNavigate} from 'react-router-dom'

import axios from 'axios'
import {useState, useEffect} from 'react'


function Vehicle(props) {
   
    let params = useParams()
    const [vehicle, setVehicle] = useState(null)
    const [km, updateKm] = useState(null)
    const [status, updateStatus] = useState('OK')
    const navigate = useNavigate()

    async function getVehicle() {  // The function is asynchronous
         const vehicle = (await axios.get('http://localhost:8000/vehicles/'+params.id)).data
         setVehicle(vehicle)
         updateKm(vehicle.kilometers)
     }

     async function updatekm() {
        if (km) {
           await axios.patch('http://localhost:8000/vehicles/'+params.id, {kilometers: km})
        }
     }
                      
     useEffect(() => { // this is a hook called everytime the function is rendered again
                                        // Don't forget to import useEffect
                        getVehicle()
                      }, []);
     useEffect(() => { // this is a hook called everytime the function is rendered again
                        // Don't forget to import useEffect
        updatekm()
      }, [km]);


    

    function drive() {
        updateKm(km+1)
        console.log("nb km :" + km)
    }

    function launchDefault() {
        updateStatus('Engine problem !')
    }
    function resetDefault() {
        updateStatus('OK')
    }
  
    async function crash() {
        await axios.delete('http://localhost:8000/vehicles/'+params.id)
        navigate('/')
    }

   

    if (!vehicle)
     return <> </>
    
    return (
      <div className='vehicle' style={{backgroundColor : vehicle.color, color : 'red'}} >
        <h1>{vehicle.trademark} / {vehicle.model}</h1>
        <img src={vehicle.logo} />

        <div className='dashboard'>
            <h2>Odometer : {km} km</h2>
            <h2>Status : {status}</h2>
        </div>

        { status == 'OK'  ? <button onClick={drive}>Drive</button>  : null}
        { status == 'OK' ?  <button onClick={launchDefault}>Launch Default</button> :   <button onClick={resetDefault}>Reset Default</button> }
     
        <div className='engineContainer'>
            <Engine cylinders='8' launchDefault={updateStatus} />
        </div>
     
        <div className='wheelsContainer'>
           {vehicle.wheels.map( (myWheel) => 
             <Wheel currentPressure={myWheel.pressure}
                          minPressure={myWheel.min}
                          maxPressure={myWheel.max}
                          launchDefault={updateStatus}
            />
           )}
        </div>
        <button onClick={crash}>Crash</button>
      </div>
    )
  }


  export default Vehicle;