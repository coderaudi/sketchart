import React, { Component } from 'react';
import { DatePicker, Switch, Card } from 'antd';
import { connect } from 'react-redux';

class WelcomePage extends Component {

    onChangeSwitch = (e) => {
        console.log(e);
    }

    render() {
        const { Meta } = Card;
        return (
            <div>
                <div>Welcome page </div>
                <DatePicker />
                <Switch defaultChecked onChange={e => this.onChangeSwitch(e)} />



                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

                {this.props.auth.defUserName}



            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ auth, notes }) => {
    // const { user } = authUser;
    return {
        auth,
        allNotes: notes.allNotes
        // name : readuxAuthreturnName
    };
};

export default connect(mapStateToProps, {
    // action methods // mapDispatchToProps
})(WelcomePage);