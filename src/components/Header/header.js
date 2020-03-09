import React, { Component } from 'react';
import { PageHeader } from 'antd';
import Sidebar from "../Sidebar/sidebar.js";

class Header extends Component {

    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {


        return (
            <div>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => null}
                    backIcon={<Sidebar />}
                    title="Google_Keep_"
                    subTitle="keep_ your all notes safe and updated!"
                />
            </div>);
    }
}

export default Header;

