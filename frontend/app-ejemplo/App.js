import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import Carga from './src/componentes/splash/Carga.js';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/componentes/home/Menu";
//import * as React from "react";


const Stack = createNativeStackNavigator();

export default function App() {
    // const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setHideSplashScreen(false);
    //     }, 3000);
    //
    //     return () => clearTimeout(timer);
    // }, []);



    return (
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
