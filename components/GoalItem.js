import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity
      onLongPress={props.onDeleteLong}
      onPress={props.onDelete.bind(this, props.id)} // this id is passed to onDelete when it's getting called by onPress
    >
      <View style={styles.lista}>
        <Text style={styles.listaTekst}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  lista: {
    padding: 10,
    paddingLeft: 32,
    margin: 10,
    marginBottom: 0,
    backgroundColor: 'lightyellow',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  listaTekst: {
    fontSize: 20,
    color: 'steelblue'
  }
});
