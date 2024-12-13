import {Alert, Button, Text, View} from "react-native";
import Checkbox from 'expo-checkbox';
import {useRootStore} from "../hooks/useRootStore";

export default function TodoLine({item, setToggleCheckBox, checkboxDisabled}) {
    const { logStore, tasksStore } = useRootStore();

    const deleteTask = (id) => {
        Alert.alert('Точно удалить?', '', [
            {
                text: 'Нет',
                style: 'cancel',
            },
            {text: 'OK', onPress: () => {
                logStore.addTaskDeletionLog(tasksStore.getTaskById(id));
                tasksStore.deleteTask(id)
            }},
        ])

    }

    const changeToggleValue = (newValue, item) => {
        logStore.addTaskCompletionLog(tasksStore.getTaskById(item.id))
        setToggleCheckBox(item.id, newValue)
    }

    return(
        <View style={{marginTop: 10, marginBottom: 10}}>
            <View style={{display: "flex", flexDirection: "row"}}>
                <Checkbox style={{marginRight: 7}} disabled={checkboxDisabled} value={item.isDone} onValueChange={newValue => changeToggleValue(newValue, item)}></Checkbox>
                <Text style={{}}>{item.text}</Text>
            </View>
            <View style={{marginTop: 10}}>
                <Button  onPress={() => deleteTask(item.id)} title={'Удалить'}></Button>
            </View>

        </View>
    )
}
