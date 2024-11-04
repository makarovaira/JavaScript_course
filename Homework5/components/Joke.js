import { Text, View } from "react-native";

export default function Joke({ id, setup, punchline }) {
    return (
        <View>
            <Text style={{ fontWeight: "bold" }}>{setup}</Text>
            <Text>{punchline}</Text>
        </View>
    );
}
