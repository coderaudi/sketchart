import React, { Component } from 'react';

import ImageCard from "./ImageCard";
class Gallary extends Component {


    constructor(props) {
        super(props);


    }


    displayImageCard = () => {
        
        let dispGallary= null; 
        
         dispGallary =  this.props.images && this.props.images.map((ele, index) => {
            if(ele.src){
                return <div className="col">
                <ImageCard
                    src={ele.src}
                    alt={ele.alt}
                    description={ele.description}
                />
            </div>
            }
        })

        return dispGallary;
    }

    render() {
        return (

            <div className="row">
                {this.displayImageCard()}
            </div>

        );
    }
}

export default Gallary;