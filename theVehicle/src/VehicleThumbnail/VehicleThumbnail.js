import './VehicleThumbnail.css'


function VehicleThumbnail(props) {
   
    return (
      <div className='vehicle' style={{backgroundColor : props.color, color : 'red'}} >
        <h1>{props.trademark} / {props.model}</h1>
        <img src={props.logo} />
      </div>
    )
  }


  export default VehicleThumbnail;

