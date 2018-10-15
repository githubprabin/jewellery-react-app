import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight,Text,ToastAndroid } from 'react-native';

export default class CustomButton extends Component {

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.props.onPress}
                underlayColor= '#9da4a6'>
                <Text style={styles.buttonText}>{this.props.title}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#d77764',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        elevation: 3
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
    }
})