import {Button, FlatList, Text, View} from 'react-native';
import { useRootStore } from "../hooks/useRootStore";
import { observer } from "mobx-react";
import { useEffect } from "react";

export const LogsScreen = observer(({ navigation }) => {
    const { logStore } = useRootStore();

    return (
        <View style={{flex: 1, flexDirection: 'column', marginTop: 100}}>
            <FlatList data={logStore.getAll()}
                      renderItem={({item}) =>
                          <Text>{item}</Text>}>
            </FlatList>
            <Button onPress={logStore.removeAll} title={"REMOVE ALL"}></Button>
        </View>
    );
});
