function Engine(props) {

   function defaut() {
    props.launchDefault('engine default')
   }

    return (
        <div className='engine'>
            <h2>This is the engine</h2>
            <span>Cylinders : {props.cylinders} </span>
            <button onClick={defaut}> Launch Engine Default</button>
        </div>
    )

}

export default Engine;
