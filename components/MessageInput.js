import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ToastAndroid } from 'react-native';
import CustomButton from './CustomButton';

export default class MessageInput extends Component {

    urlBase = this.props.urlBase;
    constructor(props) {
        super(props);
        this.state = ({
            message: '',
        })
    }

    async uploadMessage(message) {
        if (message === '') {
            ToastAndroid.show('Please enter a message', ToastAndroid.show);
            return;
        }

        await fetch(
            this.urlBase +
            "?message=" + message, {
                method: "GET"
            }
        ).then((response) => response.text())
            .then((responseData) => { ToastAndroid.show(responseData, ToastAndroid.show) });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.messagePlaceholder}
                    multiline={true}
                    multiline={false}
                    maxLength={150}
                    placeholder='Message'
                    onChangeText={(text) => { this.setState({ message: text }) }}
                />

                <CustomButton
                    title='Upload Message'
                    onPress={() => this.uploadMessage(this.state.message)}
                    style={styles.button} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {       
        flex:.3,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom:15
    },
    messagePlaceholder: {
        flex:1,
        width: '100%',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ccc',
        textAlign: 'center',
        margin: 5,
        fontSize: 15
    },
    button: {
        margin: 8,
    }
})