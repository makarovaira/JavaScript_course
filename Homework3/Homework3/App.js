import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';

export default function App() {
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);

    const setValidatedSize = (sizeText) => {
        const size = parseInt(sizeText);
        setSize(size);
    };

    const addBox = () => {
        if (!(size > 0) || color === "")
            return;

        const newBox = Box(boxes.length, { width: size, height: size, color: color });
        setBoxes([...boxes, newBox]);
    };

    const clearBoxes = () => {
        setBoxes([]);
    };

    return (
        <View>
            <ScrollView>
                {boxes}
            </ScrollView>

            <View style={{marginTop: 'auto', marginBottom: 5, marginLeft: 10}}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'stretch', height: '30%', marginTop: 'auto',
                    marginBottom: 5}}>
                    <Text style={{fontSize: 24}}>
                        {'Размер: '}
                    </Text>
                    <View style={{width: 100, height: 40, backgroundColor: 'gainsboro', borderRadius: 10, borderColor: 'black', borderWidth: 2}}>
                        <TextInput style={{marginLeft: 10, marginTop: 3}} onChangeText={setValidatedSize} />
                    </View>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'flex-row',
                    alignItems: 'stretch',
                    marginTop: 'auto',
                    marginBottom: 5}}>
                    <Text style={{fontSize: 24}}>
                        {'Цвет: '}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'stretch', marginTop: 20, marginLeft: 'auto', marginRight: 30}}>
                        <View style={{marginLeft: 10, marginRight: 10, width: 80}}>
                            <Button color='red' title='' onPress={_ => setColor("red")} ></Button>
                        </View>

                        <View style={{marginLeft: 10, marginRight: 10, width: 80}}>
                            <Button color='green' title='' onPress={_ => setColor("green")} ></Button>
                        </View>

                        <View style={{marginLeft: 10, marginRight: 10, width: 80}}>
                            <Button color='blue' title='' onPress={_ => setColor("blue")} ></Button>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    marginLeft: 'auto',
                    marginRight: 30,
                    marginTop: 30}}>
                    <View style={{
                        width: 100,
                        marginRight: 10,
                        marginLeft: 10,
                        borderRadius: 10}}>
                        <Button title='Добавить' onPress={addBox}></Button>
                    </View>
                    <View style={{
                        width: 100,
                        marginRight: 10,
                        marginLeft: 10,
                        borderRadius: 10}}>
                        <Button title='Очистить' onPress={clearBoxes}></Button>
                    </View>
                </View>
            </View>
         </View>
    );
}

export const Box = (key, props) => (
   <View key={key} style={{ width: props.width, height: props.height, backgroundColor:
        props.color}} />
);
