import React, { Component } from 'react';
import { Form, Input, Card, Button } from 'antd';
import { connect } from "react-redux";

import { adminLogin, getAllUsers } from "../../actions/index";

class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "audi@gmail.com",
            password: "123456"
        }
    }

    inputChangeHandler = (data) => {
        const { name, value } = data;
        if (value) {
            this.setState({ [name]: value });
        }
    }

   getUsers = () =>{
       let data = {
           username :"ok"
       }
    this.props.getAllUsers();
   }
   

    adminLogin = () => {
        const { email, password } = this.state;
        if (email && password) {
            this.props.adminLogin({
                email, password
            });
        }
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
                                        value={this.state.email}
                                        onChange={(e) => this.inputChangeHandler(e.target)}
                                    />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <Input type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={(e) => this.inputChangeHandler(e.target)} />
                                </div>

                                <button
                                    onClick={() => this.adminLogin()}
                                    class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6"> 
                All user req 
                <Button onClick={() => this.getUsers()} >Req ALL User </Button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6"> 
            
            </div>
                </div>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ admin }) => {
    return {
        admin
    };
};

export default connect(mapStateToProps,
    {
        adminLogin,
        getAllUsers
    }
)(AdminLogin);