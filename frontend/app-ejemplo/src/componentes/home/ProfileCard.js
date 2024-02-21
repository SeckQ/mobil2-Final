import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name={'twitter'} size={30} color={'blue'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'blue'}/>
const reddit = <Icon name={'reddit'} size={30} color={'blue'}/>
const twitch = <Icon name={'twitch'} size={30} color={'blue'}/>
const mail = <Icon name={'envelope'} size={30} color={'blue'}/>

const ProfileCard = () => {
    const user = {
        name: "Juan Sebastian Quishpe",
        coverPhoto: "https://source.unsplash.com/weekly?car-racing",
        avatar: "https://source.unsplash.com/weekly?red-car"
    };
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>{user.name}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/JuanseQuishpe')}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.linkedin.com/in/juan-sebastián-quishpe-844a28170/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.reddit.com/user/SeckQ')}>
                    {reddit}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.twitch.tv/Seck24')}>
                    {twitch}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('mailto:seck2401@outlook.com')}>
                    {mail}
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    avatarContainer: {
        marginTop: -50,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 100,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: 'white'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        marginTop: 20,
        justifyContent: 'space-between'
    }
});

export default ProfileCard