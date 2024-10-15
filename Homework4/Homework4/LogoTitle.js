import {Image, View} from "react-native";

export default function LogoTitle() {
    return (
        <View>
            <Image style={{width: 50, height: 50}} source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/7133/7133312.png'}}></Image>
        </View>
    )
}