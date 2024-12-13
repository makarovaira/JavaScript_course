import { FlatList, Text, View } from "react-native";
import TodoLine from "../components/TodoLine";

export default function CompletedTasksScreen({ navigation, route: { params } }) {
    return(
        <View style={{flex: 1, flexDirection: 'column', marginTop: 100}}>
            <View><Text>Completed tasks:</Text></View>
            <View>
                <FlatList
                    data={params.tasks}
                    renderItem={({item}) => <TodoLine item={item} checkboxDisabled={true}/>} />
            </View>
        </View>
    )
}
