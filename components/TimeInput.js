import React, { Component } from 'react';
import { StyleSheet, View, ToastAndroid } from 'react-native';
import CustomButton from './CustomButton'

export default class TimeInput extends Component {

    urlBase = this.props.urlBase;
    constructor(props) {
        super(props);
        this.state = ({
            dateTime: ''
        })
    }

    async uploadDateTime() {

        current = new Date();
        dateTime = current.toLocaleDateString('en-US') + '-' + current.toLocaleTimeString('en-US');
        ToastAndroid.show(dateTime, ToastAndroid.LONG);
        await fetch(
            this.urlBase +
            "?date_time=" + dateTime, {
                method: "GET",
            }
        ).then((response) => response.text())
            .then((responseData) => { ToastAndroid.show(responseData, ToastAndroid.show) });
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomButton
                    title='Upload Date and Time'
                    onPress={() => this.uploadDateTime()}
                    style={styles.button} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 5,
    }
})