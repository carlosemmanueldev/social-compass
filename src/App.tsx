import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import PrivateRoute from "./private-routes/PrivateRoute.tsx";

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<PrivateRoute component={Home}/>} />
                    <Route path="/profile" element={<PrivateRoute component={Profile}/>} />
                    <Route path="/logout" element={<PrivateRoute component={Logout}/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default App
