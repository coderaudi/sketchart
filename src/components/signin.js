import React, { Component } from 'react';
import { Drawer, Button, Avatar } from 'antd';

class Signin extends Component {

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

    let title = (
      <div>
        <Avatar size="large" icon="user" />

        <h2>test</h2>
      </div>
    );
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title={title}
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>);
  }
}

export default Signin;