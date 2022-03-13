import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../components/Template/Login";
import Register from "../components/Template/Register";
import NotFound from "../components/Template/NotFound";
import PlanetsList from "../components/Template/GetApi";

function routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<App/>} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/register"  element={<Register/>} />
                <Route path="/getapi"  element={<PlanetsList/>} />
                <Route path="*"  element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default routing;