import './VehicleForm.css'


function VehicleForm() {
    return (
        <>
            <div>
                <form>
                    <label htmlFor="color">color: </label>
                    <input type="text" name="color" required/>
                    <label htmlFor="cylinders">cylinders: </label>
                    <input type="number" name="cylinders" required/>
                    <label htmlFor="image">image: </label>
                    <input type="text" name="image" required/>
                    <label htmlFor="logo">logo: </label>
                    <input type="text" name="logo" required/>
                    <label htmlFor="model">model: </label>
                    <input type="text" name="model" required/>
                    <label htmlFor="trademark">trademark: </label>
                    <input type="text" name="trademark" required/>
                    <button type="submit">OK</button>
                </form>

            </div>
        </>
    )
}


export default VehicleForm;
