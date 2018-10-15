import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, TextInput, TouchableHighlight, ToastAndroid } from 'react-native';

const url = 'http://192.168.4.1/sachinpushpaM/';

// const urlBase = 'http://192.168.4.1/jewellers';
// const priceUploadURL = "/sachinpushpa?";
// const msgUploadURL = "/sachinpushpaM/";

// const urlBase = 'http://192.168.4.1/futsal';
const urlBase = 'http://192.168.0.4:8080/react/test.php';

const ic_silver = require('./assets/icons/icon_silver.png');
const ic_gold = require('./assets/icons/icon_gold.png');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      priceTGold: '',
      priceFGold: '',
      priceSilver: '',
      message: '',
      dateTime: ''
    })
  }

  async uploadPriceData(tGold, fGold, silver) {

    if (tGold === '' || fGold === '' || silver === '') {
      ToastAndroid.show('Please fill all price values', ToastAndroid.SHORT);
      return;
    }

    priceURL = urlBase +
      '?price_tGold=' + tGold +
      '&price_fGold=' + fGold +
      '&price_silver=' + silver;

    await fetch(
      priceURL, {
        method: "GET"
      }
    ).then((response) => response.text())
      .then((responseData) => { ToastAndroid.show(responseData, ToastAndroid.show) });;
  }

  async uploadMessage(message) {
    if (message === '') {
      ToastAndroid.show('Please enter a message', ToastAndroid.show);
      return;
    }

    await fetch(
      urlBase +
      "?message=" + message, {
        method: "GET"
      }
    ).then((response) => response.text())
      .then((responseData) => { ToastAndroid.show(responseData, ToastAndroid.show) });
  }

  async uploadDateTime() {

    current = new Date();
    dateTime = current.toLocaleDateString('en-US') + '-' + current.toLocaleTimeString('en-US');
    ToastAndroid.show(dateTime, ToastAndroid.LONG);
    await fetch(
      urlBase +
      "?date_time=" + dateTime, {
        method: "GET",

      }
    ).then((response) => response.text())
      .then((responseData) => { ToastAndroid.show(responseData, ToastAndroid.show) });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Pushpa Jewellers</Text>
        </View>

        <View style={styles.priceInputContainer}>
          <View style={styles.horizontal}>
            <Image style={styles.smallIcon} source={ic_gold} />
            <TextInput
              style={styles.pricePlaceholder}
              placeholder='Price of Gold 1'
              onChangeText={(text) => { this.setState({ priceTGold: text }) }}
            />
          </View>

          <View style={styles.horizontal}>
            <Image style={styles.smallIcon} source={ic_gold} />
            <TextInput
              style={styles.pricePlaceholder}
              placeholder='Price of Gold 2'
              onChangeText={(text) => { this.setState({ priceFGold: text }) }}
            />
          </View>

          <View style={styles.horizontal}>
            <Image style={styles.smallIcon} source={ic_silver} />
            <TextInput
              style={styles.pricePlaceholder}
              placeholder='Price of Silver'
              onChangeText={(text) => { this.setState({ priceSilver: text }) }}
            />
          </View>

          <TouchableHighlight style={styles.button}
            onPress={() => this.uploadPriceData(this.state.priceTGold, this.state.priceFGold, this.state.priceSilver)}>
            <Text style={styles.buttonText}>Upload Price</Text>
          </TouchableHighlight>

        </View>


        <View style={styles.messageInputContainer}>
          <TextInput
            style={styles.messagePlaceholder}
            multiline={true}
            maxLength={100}
            keyboardType='number-pad'
            placeholder='Message'
            onChangeText={(text) => { this.setState({ message: text }) }}
          />

          <TouchableHighlight style={styles.button} onPress={() => this.uploadMessage(this.state.message)}>
            <Text style={styles.buttonText}>Upload Message</Text>
          </TouchableHighlight>
        </View>


        <View style={styles.dateInputContainer}>
          <TouchableHighlight style={styles.button} onPress={() => this.uploadDateTime()}>
            <Text style={styles.buttonText}>Upload Date and Time</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleContainer: {
    flex: .3
  },
  priceInputContainer: {
    flex: 1,
    width: '80%'
  },
  messageInputContainer:{
    flex: 1,
    width: '80%',
  },
  dateInputContainer: {
    flex: .3
  },
  textTitle: {
    color: '#daa520',
    fontSize: 30,
    fontWeight: 'bold',
  },
  smallIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },
  pricePlaceholder: {
    flex:1,
    textAlign: 'center'
  },
  messagePlaceholder: {
    
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    textAlign: 'center',
    margin: 2
  },
  button: {
    width: '40%',
    backgroundColor: '#333333',
    padding: 10,
    margin: 5,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    margin: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#aaa',
    alignItems: 'center'
  }
});
