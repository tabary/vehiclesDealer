import './VehicleThumbnail.css'


function VehicleThumbnail(props) {
    return (
        <a href={`http://localhost:3000/vehicle/${props.id}`}>
            <div className='vehicle' style={{backgroundColor: props.color, color: 'red'}}>
                <h1>{props.trademark} / {props.model}</h1>
                <img src={props.logo}/>
            </div>
        </a>
    )
}


export default VehicleThumbnail;

