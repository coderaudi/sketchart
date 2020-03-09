import React, { Component } from 'react';

import "./cardstyle.scss";

const cardStyle ={
    width : "22rem",
    marginBottom : "20px"
}

class ImageCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-center"> 
                <div className="card img-hover-zoom" style={cardStyle}>
                    <img src={this.props.src} className="card-img-top" alt={this.props.alt} />
                    <div className="card-body">
                           <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageCard;