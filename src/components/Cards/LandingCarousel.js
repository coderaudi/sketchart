import React, { Component } from 'react';
import { Carousel } from 'antd';

class LandingCarousel extends Component {

    constructor(props){
        super(props);

    }



    carouselTile = () =>{

        return null
    }



    render() {
        return (
            <div style={{ background: "gray"}} >
                <Carousel autoplay>
 
                <div >
            <div className="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
            
                <p>Resize this responsive page to see the effect!</p>
            </div>
        </div>
                </Carousel>
            </div>
        );
    }
}

export default LandingCarousel;