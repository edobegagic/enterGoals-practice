import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal animationType='slide' visible={props.visible}>
      <View style={styles.unutarnji}>
        <TextInput
          placeholder='ovdje unesi Vaše ciljeve'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.dugmad}>
          <View style={styles.button}>
            <Button title='cancel' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  unutarnji: {
    borderWidth: 1,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderColor: 'steelblue',
    borderRadius: 20,
    width: '80%',
    padding: 10,
    paddingLeft: 34,
    marginBottom: 10
  },
  dugmad: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%'
  },
  button: {
    width: '40%'
  }
});
