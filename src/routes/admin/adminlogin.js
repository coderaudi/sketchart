import React, { Component } from 'react';
import { Form, Input, Card } from 'antd';
import { connect } from "react-redux";

import { adminLogin } from "../../actions/index";

class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    inputChangeHandler = (data) => {
        const { name, value } = data;
        if (value) {
            this.setState({ [name]: value });
        }
    }

    adminLogin = () => {
        console.table(this.state);
        this.props.adminLogin();
    }


    render() {
        return (
            <div>

                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="col-sm-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4">
                        <div class="card">
                            <div class="card-body">

                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <Input
                                        type="text"
                                        name="email"
                                        onChange={(e) => this.inputChangeHandler(e.target)}
                                    />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <Input type="password"
                                        name="password"
                                        onChange={(e) => this.inputChangeHandler(e.target)} />
                                </div>

                                <button
                                    onClick={() => this.adminLogin()}
                                    class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({admin}) => {
    return {
        admin
    };
};

export default connect(mapStateToProps,
    {
        adminLogin
    }
)(AdminLogin);