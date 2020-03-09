import React, { Component } from 'react';
import { Drawer, Avatar, Icon, Divider, Button } from 'antd';
import { connect } from 'react-redux';

class SiderBar extends Component {

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

    filterNotes = (e, labelName) => {
        console.log(labelName)
    }

    dispLables = () => {
        let lables = this.props.noteLabels;

        let dispLables = lables && lables.map((labelName, index) => {
            return (

                <Button key={labelName}
                    style={{ margin: "2px" }}
                    onClick={e => this.filterNotes(e, labelName)}>{labelName}</Button>
            )

        })
        return dispLables ? dispLables : "";
    }

    render() {

        let title = (
            <div>
                <Avatar size="large" icon="user" />
                <h2>test</h2>
            </div>
        );
        return (
            <div>
                <Icon type="menu-unfold" onClick={this.showDrawer} />
                <Drawer
                    title={title}
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >

                    <h1> <Icon type="snippets" /> Notes</h1>
                    <h1> <Icon type="sound" /> Reminders</h1>
                    <Divider />
                    <div>
                        <h3>Lables <Icon type="tags" /> </h3>
                        <br />
                        {this.dispLables()}
                        <h4> edit lables  </h4>
                    </div>
                    <Divider />
                    <h2> <Icon type="download" /> Archive</h2>
                    <h2> <Icon type="delete" /> Bin</h2>

                </Drawer>
            </div>);
    }
}


// map state to props
const mapStateToProps = ({ auth, notes }) => {
    // const { user } = authUser;
    return {
        auth,
        allNotes: notes.allNotes,
        noteLabels: notes.noteLabels
        // name : readuxAuthreturnName
    };
};

export default connect(mapStateToProps, {
    //deleteOldNote
})(SiderBar);
