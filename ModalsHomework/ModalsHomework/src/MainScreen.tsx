import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {observer} from 'mobx-react';
import {useStore} from './useStore.ts';
import {Modalize} from 'react-native-modalize';

const MainScreen = observer(() => {
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const mainStore = useStore();
  const [taskName, setTaskName] = useState('');
  const addTask = () => {
    mainStore.addTask(taskName);
  };
  const getTaskList = () => {
    mainStore.getTasks();
  };
  useEffect(() => {
    getTaskList();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Task Name"
            value={taskName}
            onChangeText={setTaskName}
          />
          <Button title="Add Task" onPress={addTask} />
        </View>
        <Button title="Open Completed" onPress={onOpen} />
        <FlatList
          data={mainStore.tasks}
          renderItem={({item}) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.name}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => mainStore.completeTask(item.id)}>
                  <Text style={styles.buttonText}>Complete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    Alert.alert('Delete task?', '', [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => mainStore.deleteTask(item.id),
                      },
                    ]);
                  }}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Modalize ref={modalizeRef} modalTopOffset={200}>
        <FlatList
          data={mainStore.completedTasks}
          renderItem={({item}) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </Modalize>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
    borderRadius: 4,
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default MainScreen;
