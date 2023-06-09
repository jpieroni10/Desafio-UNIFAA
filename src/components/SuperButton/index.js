import React from "react";
import { TouchableHighlight, StyleSheet, View, Text, Alert } from "react-native";

const SuperButton = (props) => {
    return (
        <TouchableHighlight 
        style = {style.superButton}
        onPress={() => Alert.alert("Fui clicado!")}>

            <View 
            style={style.button}>
                <Text style={style.valor}>{props.valor}</Text>
            </View>

        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    superButton:{
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00B0FF',
        padding: 12,
        width: 300,
        marginBottom: 15,
    },
    valor:{
        fontSize: 18
    }
});

export default SuperButton;