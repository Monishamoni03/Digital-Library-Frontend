import React, { Component } from "react";
import { Routes, Route} from 'react-router-dom';
// import Home from '.././components/home/Home';
// import About from '.././components/home/About';
// import Contact from '../components/home/Contact';
import Login from '.././components/home/Login';
import Register from '.././components/home/Register';
// import NavBar from '../components/shared/NavBar';

class Router extends Component {
    render() {
        return (
            <div>
                <Routes>
                     {/* <Route exact path="/" element={<Home />} /> */}
                    {/*<Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} /> */}
                    <Route exact path="/login" element={<Login />} /> 
                    <Route exact path="/" element={<Register />} /> 
                </Routes>
            </div>
        )
    }
}

export default Router;