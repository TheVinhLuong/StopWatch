import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
            />
        );
    }
}

const mapStateToProps = (state) => {
    return{
     
    };
}

export default connect(mapStateToProps, null, null, { withRef: true })(HomeScreen);