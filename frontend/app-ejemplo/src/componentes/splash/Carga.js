import * as React from "react";
import { StyleSheet, View } from "react-native";


const Carga = () => {
    return (
        <View style={styles.frameParent}>
            <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("./splash.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    frameChild: {
        position: "absolute",
        top: 75,
        left: 0,
        width: 370,
        height: 768,
    },
    frameParent: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});

export default Carga;