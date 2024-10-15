import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./sreens/HomeScreen";
import NewsScreen from "./sreens/NewsScreen";
import SettingsScreen from "./sreens/SettingsScreen";
import ChatScreen from "./sreens/ChatScreen";
import {Button, Text, View} from "react-native";
import AboutScreen from "./sreens/AboutScreen";
import LogoTitle from "./LogoTitle";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{tabBarLabelStyle: {fontSize: 18, marginRight: 20}}}>
            <Tab.Screen name="Home" component={StackNavigation} options={{headerShown: false}} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const StackNavigation = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerTitleAlign: 'center',
                    headerTitle: (props) => <LogoTitle/>,
                    headerRight: () => (
                        <Button onPress={() => navigation.navigate('AboutScreen')} title="About" color="#000"/>
                    )
            }}/>
            <Stack.Screen name="AboutScreen" component={AboutScreen}/>
        </Stack.Navigator>
    );
}


export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Tab'} component={TabNavigation} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

