import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import StopWatch from '../model/StopWatch'
import {fireStartWatch} from "../actions/stopWatch"
class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    componentWillMount() {
        this.props.dispatch(fireStartWatch());
    }

    componentWillReceiveProps(){
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Text>
                {this.props.elapsedTime}
            </Text>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        elapsedTime: state.stopWatchReducer.elapsedTime,
    };
}

export default connect(mapStateToProps, null, null, { withRef: true })(HomeScreen);