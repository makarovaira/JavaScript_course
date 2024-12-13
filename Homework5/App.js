import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoListScreen } from "./screens/TodoListScreen";
import { LogsScreen } from "./screens/LogsScreen";
import AboutScreen from "./screens/AboutScreen";
import CompletedTasksScreen from "./screens/CompletedTasksScreen";
import {Button} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';

const Stack = createNativeStackNavigator();

const StackNavigation = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='TODO' component={TodoListScreen} options={{
                headerRight: () => (
                    <Button onPress={() => navigation.navigate('Logs')} title="Logs" color="#000"/>
                )
            }}/>
            <Stack.Screen name='Logs' component={LogsScreen} />
            <Stack.Screen name='About' component={AboutScreen} />
            <Stack.Screen name='Completed tasks' component={CompletedTasksScreen} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Host>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={'Main'} component={StackNavigation} options={{headerShown: false}} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Host>
        </GestureHandlerRootView>
    );
}
