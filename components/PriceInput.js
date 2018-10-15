import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, ToastAndroid } from 'react-native';
import CustomButton from './CustomButton';

const ic_silver = require('../assets/icons/icon_silver.png');
const ic_gold = require('../assets/icons/icon_gold.png');

export default class PriceInput extends Component {

    urlBase = this.props.urlBase;
    constructor(props) {
        super(props);
        this.state = ({
            priceTGold: '',
            priceFGold: '',
            priceSilver: ''
        })
    }

    async uploadPriceData(tGold, fGold, silver) {

        if (tGold === '' || fGold === '' || silver === '') {
            ToastAndroid.show('Please fill all price values', ToastAndroid.SHORT);
            return;
        }

        priceURL = this.urlBase +
            '?price_tGold=' + tGold +
            '&price_fGold=' + fGold +
            '&price_silver=' + silver;

        await fetch(
            priceURL, {
                method: "GET"
            }
        ).then((response) => response.text())
            .then((responseData) => { ToastAndroid.show(responseData, ToastAndroid.show) });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.horizontalContainer}>
                    <Image style={styles.smallIcon} source={ic_gold} />
                    <TextInput
                        style={styles.pricePlaceholder}
                        placeholder='Price of Gold 1'
                        keyboardType='numeric'
                        maxLength={5}
                        onChangeText={(text) => { this.setState({ priceTGold: text }) }}
                    />
                </View>

                <View style={styles.horizontalContainer}>
                    <Image style={styles.smallIcon} source={ic_gold} />
                    <TextInput
                        style={styles.pricePlaceholder}
                        placeholder='Price of Gold 2'
                        keyboardType='numeric'
                        maxLength={5}
                        onChangeText={(text) => { this.setState({ priceFGold: text }) }}
                    />
                </View>

                <View style={styles.horizontalContainer}>
                    <Image style={styles.smallIcon} source={ic_silver} />
                    <TextInput
                        style={styles.pricePlaceholder}
                        placeholder='Price of Silver'
                        keyboardType='numeric'
                        maxLength={5}
                        onChangeText={(text) => { this.setState({ priceSilver: text }) }}
                    />
                </View>

                <CustomButton
                    title='Upload Price'
                    onPress={() => this.uploadPriceData(this.state.priceTGold, this.state.priceFGold, this.state.priceSilver)}
                    style={styles.button} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:.5,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 3,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#aaa',
        alignItems: 'center',
    },
    smallIcon: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
        left: 5
    },
    pricePlaceholder: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        margin: 8,
    }
})