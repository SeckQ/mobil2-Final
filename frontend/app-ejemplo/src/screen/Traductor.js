import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
import {Picker} from "react-native-web";

//48.0.18
const Traductor = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('')

    const getTranslateFromOpenApi = async () => {
        try {
            const response = await fetch('http://localhost:9004/translate', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({prompt, language: selectedLanguage})
            })
            const jsonData = await response.json();
            setResult(`${jsonData.result} y los tokens utilizados fueron ${jsonData.token}`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}
                       placeholder={'Ingresa tu texto'}/>
            <Picker
                selectedValue={selectedLanguage}
                style={styles.picker}
                onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
                <Picker.Item label="Español" value="español" />
                <Picker.Item label="Inglés" value="ingles" />
                <Picker.Item label="Francés" value="frances" />
                <Picker.Item label="Italiano" value="italiano" />
                <Picker.Item label="Alemán" value="aleman" />
                <Picker.Item label="Latín" value="latin" />
                <Picker.Item label="Kichwa" value="kichwa" />
            </Picker>
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

export default Traductor