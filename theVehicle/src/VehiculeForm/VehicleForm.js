import './VehicleForm.css'
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function VehicleForm() {
    const [vehicle, setVehicle] = useState({color: "", cylinders: "", image: "", logo: "", model: "", trademark: ""});
    const navigate = useNavigate();

    function handleChange(e, field) {
        setVehicle({...vehicle, [field]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("color", vehicle.color);
            data.append("cylinders", vehicle.cylinders);
            data.append("image", vehicle.image);
            data.append("logo", vehicle.logo);
            data.append("model", vehicle.model);
            data.append("trademark", vehicle.trademark);
            await axios.post("http://localhost:8000/vehicles", data);
            setVehicle({color: "", cylinders: "", image: "", logo: "", model: "", trademark: ""});
            navigate('/');
        } catch (e) {
            console.error("ERR", e);
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="color">color: </label>
                    <input type="text" name="color" value={vehicle.color} onChange={e => handleChange(e, "color")}
                           required/>
                    <label htmlFor="cylinders">cylinders: </label>
                    <input type="number" name="cylinders" value={vehicle.cylinders}
                           onChange={e => handleChange(e, "cylinders")} required/>
                    <label htmlFor="image">image: </label>
                    <input type="text" name="image" value={vehicle.image} onChange={e => handleChange(e, "image")}
                           required/>
                    <label htmlFor="logo">logo: </label>
                    <input type="text" name="logo" value={vehicle.logo} onChange={e => handleChange(e, "logo")}
                           required/>
                    <label htmlFor="model">model: </label>
                    <input type="text" name="model" value={vehicle.model} onChange={e => handleChange(e, "model")}
                           required/>
                    <label htmlFor="trademark">trademark: </label>
                    <input type="text" name="trademark" value={vehicle.trademark}
                           onChange={e => handleChange(e, "trademark")} required/>
                    <button type="submit">OK</button>
                </form>

            </div>
        </>
    )
}


export default VehicleForm;
