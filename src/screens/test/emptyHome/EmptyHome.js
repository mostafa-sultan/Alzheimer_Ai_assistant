
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Register from './../../register/Register';

const Emptyhome = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.pic}>
                <Image
                    source={require("../../../images/land.png")}
                    style={styles.image}></Image>

            </View>
            <View style={styles.downSection}>

                <Text style={styles.smalText}>
                    Connect your kid's device and start {"\n"}         protecting their online life </Text>
                <TouchableOpacity
                    style={styles.register}>
                    <Text style={styles.registerText}>+ Add Device</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.register}>
                    <Text style={styles.registerText}>Discover Product</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        // backgroundColor: "#007acc",
    },
    pic: {
        flex: 2,
        // backgroundColor: "#877",
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        width: "97%",
        height: "80%",
        // margin:"5%"
        // borderWidth:7,
        // borderColor:"#fff",
        marginTop: 30

    },
    downSection: {
        flex: 2,
        alignItems: "center",
    },
    bigText: {
        fontSize: 50,
        color: "#000",
        marginBottom: 20
    },
    smalText: {
        color: "#777",
        marginBottom: 30
    },
    register: {
        backgroundColor: "#55C57A",
        width: "90%",
        borderRadius: 30,
        alignItems: "center",
        padding: 10,
        marginBottom: 10

    },
    registerText: {
        fontSize: 19,
        color: "#fff"
    },
    log_button: {
        opacity: 0.7,
        color: "#777",
    },

})

export default Emptyhome;
