import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import StopWatch from '../model/StopWatch'
import { fireStartWatch, START_WATCH, fireStopWatch } from "../actions/stopWatch"
import RoundButton from "../components/buttons/RoundButton"
class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    componentWillMount() {
    }

    componentWillReceiveProps() {
    }

    handlePressRightButton = () => {
        console.log("wtf", "handlePress");
        switch (this.props.stopWatchState) {
            case START_WATCH:
                this.props.dispatch(fireStopWatch());
                break;
            default:
                console.log("wtf", "fireStart");
                this.props.dispatch(fireStartWatch());
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            // <View>
            //     <Text>
            //         {this.props.elapsedTime}
            //     </Text>
            // </View>
            <View style={styles.container}>
                <View style={styles.timeDisplayContainer}>
                    <Text style={styles.smallStopWatch}>
                        00:02:23
                    </Text>
                    <Text style={styles.bigStopWatch}>
                    {this.props.elapsedTime}
                    </Text>
                </View>
                <View style={styles.buttonsLayout}>
                    <RoundButton
                        text="A"
                    />
                    <RoundButton
                        text="B"
                        onPress={this.handlePressRightButton}

                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        elapsedTime: state.stopWatchReducer.elapsedTime,
        stopWatchState: state.stopWatchReducer.stopWatchState
    };
}

export default connect(mapStateToProps, null, null, { withRef: true })(HomeScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e8',
    },
    timeDisplayContainer: {
        flexDirection: 'column',
        backgroundColor: '#FCFCFF'
    },
    smallStopWatch: {
        marginTop: 10,
        marginRight: 35,
        fontSize: 12,
        color: 'grey',
        alignSelf: 'flex-end'
    },
    bigStopWatch: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 10
    },
    buttonsLayout: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },


})