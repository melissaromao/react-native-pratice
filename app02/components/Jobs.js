import React from "react";
import { View, Text, Image } from "react-native";
export default function Jobs(props) {
    return (
        <View>
            <Image
                source={{ uri: props.img }}
                style={{ width: props.largura, height: props.altura, borderRadius: 100, alignSelf: 'center' }}
            />
            <Text style={{ color: '#36c1d6', fontSize: 30, margin: 15, textAlign: 'center', fontWeight: 'bold',  width: 500}}>
                {props.fulano}
            </Text>
        </View>
    );
}