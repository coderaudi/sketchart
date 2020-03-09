import React, { Component } from 'react';
import { Card } from 'antd';
class NoteTile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card title="Default size card" extra={<a href="#">Edit</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

            </div>
        );
    }
}

export default NoteTile;