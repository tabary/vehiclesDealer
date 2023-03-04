import logo from './logo.svg';
import {Route, Link, Routes} from "react-router-dom"
import './App.css';
import Home from './Home/Home'
import Credits from './Credits/Credits'

import Vehicle from './Vehicle/Vehicle';
import VehicleForm from "./VehiculeForm/VehicleForm";

function App() {
    return (

        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/credits">Credits</Link>
                <Link to="/addVehicle">new vehicle</Link>
            </nav>

            <Routes>
                <Route exact={true} path="/" element={<Home/>}/>
                <Route exact={true} path="/credits" element={<Credits/>}/>
                <Route exact={true} path="/vehicle/:id" element={<Vehicle/>}/>
                <Route exact={true} path="/addVehicle" element={<VehicleForm/>}/>
                <Route path="*" element={() => <p>Page Not Found</p>}/>
            </Routes>
        </>


    );
}

export default App;


/*

 <div >
          <Vehicle trademark="Renault" model="Clio" color="lightblue" logo="https://www.turbo.fr/sites/default/files/2018-01/renault_0.png"/>
          <Vehicle trademark="Porsche" model="Carrera S" color="lightgreen" logo="https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg" />
    </div>

*/
