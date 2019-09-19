import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function SvjetloPlavi() {
  return (
    <View style={styles.container}>
      <View style={{ height: 70 }}></View>
      <View style={styles.lightBlue}>
        <View style={styles.prvaKocka}>
          <Text style={styles.slova}>1</Text>
        </View>
        <View style={styles.drugaKocka}>
          <Text style={styles.slova}>2</Text>
        </View>
        <View style={styles.trecaKocka}>
          <Text style={styles.slova}>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
    paddingTop: 50,
    flexDirection: 'column'
  },
  unutarnji: {
    borderWidth: 1,
    borderColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    paddingLeft: 4,
    width: '60%'
  },
  nekiTekst: {
    borderWidth: 1,
    borderColor: 'purple'
  },
  lightBlue: {
    height: 300,
    width: '80%',
    backgroundColor: 'lightblue',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  prvaKocka: {
    backgroundColor: 'lightcoral',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  drugaKocka: {
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    flex: 1
  },
  trecaKocka: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    flex: 1
  },
  slova: {
    fontSize: 30,
    color: 'white',
    borderRadius: 45,
    backgroundColor: 'steelblue',
    padding: 30,
    paddingTop: 20,
    paddingBottom: 20
  }
});
