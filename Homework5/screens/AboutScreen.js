import { Button, Text, View } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={{flex: 1, flexDirection: 'column', marginTop: 100}}>
            <Text>About page</Text>
            <Button title={'Back'} onPress={() => navigation.goBack()}></Button>
        </View>
    );
}
