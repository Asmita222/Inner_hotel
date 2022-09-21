import React from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
// import InnerHotelPage from '../pages/hotel';
// import Footer from '../website/components/footer';
// import Header from '../website/components/header';
import Home from '../website/screens/home';

const Routing = () => {
    return(
        <BrowserRouter>
        <React.Fragment>
        <Routes>
            {/* <Route path="/hotel" exact element ={<InnerHotelPage/>} /> 
            <Route path="/header" exact element ={<Header/>} />   
            <Route path="/footer" exact element ={<Footer/>} />   */}
            <Route path="/" exact element ={<Home/>} />        
        </Routes>
        </React.Fragment>
        </BrowserRouter>
    )
}

export default Routing;