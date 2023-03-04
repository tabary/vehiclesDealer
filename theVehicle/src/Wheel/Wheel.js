import './Wheel.css'
import { useState, useEffect } from 'react';

function Wheel(props) {

    const [currentPressure, updatePressure] = useState(+props.currentPressure)

    useEffect(() => { 
        if (currentPressure < props.minPressure || currentPressure > props.maxPressure)
            props.launchDefault('Wheel Default')
        console.log("pressure is changed")
    }, [currentPressure]);

    function inflate() {
       updatePressure(currentPressure+1)
    }

    function deflate(){
        if (currentPressure > 0) 
            updatePressure(currentPressure-1)          
    }

    return (
        <div className='wheel'>
            <img src='https://hips.hearstapps.com/hmg-prod/images/pmx0908119a-1591389137.jpg' />
            <span>Current Pressure : {currentPressure}</span>
            <button onClick={inflate}>+</button>
            <button onClick={deflate}>-</button>
            <span>Default Pressure : {props.minPressure} - {props.maxPressure}</span>
        </div>
    )

}

export default Wheel;
