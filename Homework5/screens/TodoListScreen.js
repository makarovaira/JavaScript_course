import {ActivityIndicator, Button, FlatList, ScrollView, Text, TextInput, View} from 'react-native';
import TodoLine from "../components/TodoLine";
import { observer } from "mobx-react";
import {useEffect, useRef} from "react";
import { useRootStore } from "../hooks/useRootStore";
import Joke from "../components/Joke";
import {Modalize} from "react-native-modalize";
import {Portal} from "react-native-portalize";

export const TodoListScreen = observer(({ navigation }) => {
    const { tasksStore, jokesStore, logStore } = useRootStore();
    const modalizeRef = useRef(null);

    useEffect(() => {
        jokesStore.loadJoke();
        logStore.load();
    }, []);

    const addTask = () => {
        logStore.addTaskAdditionLog(tasksStore.getTaskDraftText())
        tasksStore.addTask();
    }

    const onOpen = () => {
        modalizeRef.current.open();
    };

    return (
        <View style={{flex: 1, flexDirection: 'column', marginTop: '7%', marginLeft: '5%', marginRight: '5%'}}>
            {jokesStore.joke !== null
                ? (<Joke {...jokesStore.joke} />)
                : jokesStore.isLoading
                    ? (<ActivityIndicator />)
                    : (<Text>No jokes were loaded</Text>)
            }
            <Button title={'About'} onPress={() => navigation.navigate("About")}></Button>
            <View style={{marginTop: 25, marginBottom: 10}}><Text style={{fontWeight: "600", fontSize: 20}}>New tasks:</Text></View>
            <View>
                <FlatList data={tasksStore.tasks} renderItem={({item}) => <TodoLine item={item} setToggleCheckBox={tasksStore.setTaskToggleCheckBox} deleteTask={tasksStore.deleteTask} checkboxDisabled={false}/>}></FlatList>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{borderColor: 'black', borderWidth: 5}}>
                    <TextInput style={{}} onChangeText={tasksStore.setTaskDraftText}></TextInput>
                </View>
                <View style={{}}>
                    <Button onPress={addTask} title={'ADD'}></Button>
                </View>
            </View>
            <View style={{}}>
                <Button
                    onPress={onOpen}
                    title={'Completed tasks'} />
            </View>
            <Portal>
                <Modalize ref={modalizeRef}
                          modalTopOffset={40}
                          modalStyle={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                          avoidKeyboardLikeIOS={true}>
                    <View style={{flex: 1, flexDirection: 'column', marginTop: 10, position: 'relative'}}>
                        <View>
                            <FlatList
                                data={tasksStore.tasks.filter(x => x.isDone === true)}
                                scrollEnabled={false}
                                style={{marginTop: 20, marginLeft: 20, marginRight: 20}}
                                renderItem={({item}) => <TodoLine item={item} checkboxDisabled={true}/>}
                                ListHeaderComponent={<Text style={{marginBottom: 20, fontSize: 18, fontWeight: "700"}}>Completed tasks:</Text>}/>
                        </View>
                    </View>
                </Modalize>
            </Portal>
        </View>
    );
})
