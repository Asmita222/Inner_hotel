import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Box, Button, Card, Container, Grid, Typography } from "@material-ui/core";
import MyBackground from '../../static/images/hotelbg.jpg';
import kathmandu from '../../static/images/kathmandu.jpg';

const Home = () =>{
    return(
        <>
        <Header />
        <HomePage />
        <Footer/>
        </>
    )
}

const HomePage = () =>{
    return(
        <Box>
            <Box>
           <Box className="background-img">
               <img src={MyBackground}  alt="" className="myhotelbg-image" />
           </Box>
           <Box className="search-box">
             <input type="search" placeholder="Search Hotels" className="search-input" />
             <Button className="search-button">Search</Button> 
           </Box>
           <Container>
            <Box className="city-container">
            <Box className="cities-box">
                <Typography className="cities-txt">Hotels Based On Cities</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card>
                        <img src={kathmandu} alt="kathamndu" className="cities" />
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <img src={kathmandu} alt="bkt" className="cities" />
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <img src={kathmandu} alt="bkt" className="cities" />
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <img src={kathmandu} alt="bkt" className="cities" />
                    </Card>
                </Grid>
            </Grid>
            </Box>
           </Container>
           </Box>

        </Box>
    )
}

export default Home;