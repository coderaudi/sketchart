import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LandingHeader from "../components/Landing/LandingHeader";
import LandingFooter from "../components/Landing/LandingFooter";

import ImageCard from "../components/Cards/ImageCard";

import Gallary from "../components/Cards/cardGallary";
import LandingCarousel from "../components/Cards/LandingCarousel";

class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gallary: [{
                src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
                alt: "img-title",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: "",
                offers: ""
            }, {
                src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
                alt: "img-title",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: "",
                offers: ""
            }, {
                src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
                alt: "img-title",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: "",
                offers: ""
            },
            {
                src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
                alt: "img-title",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                price: "",
                offers: ""
            }
        ,{
            src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
            alt: "img-title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "",
            offers: ""
        },{
            src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
            alt: "img-title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "",
            offers: ""
        },{
            src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
            alt: "img-title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "",
            offers: ""
        },{
            src: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
            alt: "img-title",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "",
            offers: ""
        }],
            carousel_gallary : null
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps.gallary!==this.props.gallary){
          //Perform some operation here
          this.setState({gallary: this.props.gallary});
        }

        if(prevProps.carousel_gallary!==this.props.carousel_gallary){
            //Perform some operation here
            this.setState({carousel_gallary: this.props.carousel_gallary});
    
          }
          
      }


    render() {
        return (
            <div>
                <LandingHeader />
                <div className="container-fluid" style={{ marginTop: "70px" }}>

                    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <LandingCarousel 
                           carousel_gallary={this.state.carousel_gallary}/>
                    </div>
                    <Gallary
                        images={this.state.gallary}
                    />
                </div>
                <LandingFooter />
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ gallary }) => {
    return {
        gallary : gallary.gallary,
        carousel_gallary : gallary.carousel_gallary
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        {

        }
    )(LandingPage)
);