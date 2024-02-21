import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text, Button} from "react-native";

//48.0.18

const TextoBinario = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getTranslateFromOpenApi = async () => {
        try {
            const response = await fetch('http://localhost:9004/textbinary', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json();
            setResult(`${jsonData.result} y los tokens utilizados fueron ${jsonData.token}`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Ingrese su texto a convertir
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}
                       placeholder={'Ingresa tu numero en texto'}/>
            <Button title={'Enviar'} onPress={getTranslateFromOpenApi}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    picker: {
        width: 200,
        height: 50
    }
})

export default TextoBinario