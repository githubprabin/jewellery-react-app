import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import PriceInput from './components/PriceInput';
import MessageInput from './components/MessageInput';
import TimeInput from './components/TimeInput';

// const urlBase = 'http://192.168.4.1/futsal';
const urlBase = 'http://192.168.0.4:8080/react/test.php';

export default class App extends Component {

  render() {
    return (
      <ScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={true}
    >

        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Pushpa Jewellers</Text>
        </View>

        <PriceInput style={styles.priceInput} urlBase={urlBase}/>

        <MessageInput style={styles.messageInput} urlBase={urlBase}/>

        <TimeInput style={styles.timeInput} urlBase={urlBase}/>

      </ScrollView>
    );
  }
}

const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    height: h>w?h-24:w-24,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleContainer: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceInput: {
  },
  messageInput:{
  },
  timeInput: {
  },
  textTitle: {
    color: '#daa520',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
