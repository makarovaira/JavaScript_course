import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react';
import {useStore} from './useStore.ts';
import {Modalize} from 'react-native-modalize';
import {IColors, ThemeTypes} from './themes/ThemeTypes.ts';
import {useTheme} from './themes/useTheme.ts';

const useStyles = (colors: IColors) =>
  StyleSheet.create({
    content: {
      flex: 1,
      backgroundColor: colors.backgroundPrimary,
      padding: 10,
    },
  });

const MainScreen = observer(() => {
  const {Colors, changeTheme} = useTheme();
  const style = useStyles(Colors);
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
      <View style={style.content}>
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
        <Button
          title="Dark Theme"
          onPress={() => changeTheme(ThemeTypes.DARK)}
        />
        <Button
          title="Light Theme"
          onPress={() => changeTheme(ThemeTypes.LIGHT)}
        />
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
