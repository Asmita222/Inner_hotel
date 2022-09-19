import React from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import InnerHotelPage from '../pages/hotel';

const Routing = () => {
    return(
        <BrowserRouter>
        <React.Fragment>
        <Routes>
            <Route path="/hotel" exact element ={<InnerHotelPage/>} />            
        </Routes>
        </React.Fragment>
        </BrowserRouter>
    )
}

export default Routing;