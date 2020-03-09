import React, { Component } from 'react';
import {  Link  } from "react-router-dom";   

import { connect } from "react-redux";
import { getContactUsData } from "../../actions/index";
class Aboutus extends Component {

    componentDidMount() {
        this.props.getContactUsData();
    }


    featchData = () => {
        this.props.getContactUsData();
    }
    render() {
        return (
            <div>
                <div>About us </div>

                <button onClick={() => this.featchData()}>load data</button>
 
                       <Link className="nav-link" to="/app/admin/login">Admin Login</Link>

            </div>


        );
    }
}


// map state to props
const mapStateToProps = ({ contactUS }) => {
    return {
        contactUS
    };
};

export default connect(
    mapStateToProps,
    {
        getContactUsData
    }
)(Aboutus);
