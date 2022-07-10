import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Register from './../../register/Register';

const Landing = () => {
    return (
        <View style={styles.continer}>
            <View style={styles.pic}>
                <Image
                    source={require("../../../images/land.png")}
                    style={styles.image}></Image>

            </View>
            <View style={styles.downSection}>
                <Text style={styles.bigText}>
                    Live Gurd
                </Text>
                <Text style={styles.smalText}>
                    Don\'t worry anymore We are watching {"\n"}    and making sure of safety for you
                </Text>
                <TouchableOpacity
                    style={styles.register}>
                    <Text style={styles.registerText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                <Text style={styles.log_button}>Do you have account? Login</Text> 
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
        padding: 17,
        marginBottom: 30

    },
    registerText: {
        fontSize: 25,
        color: "#fff"
    },
    log_button: {
        opacity: 0.7,
        color: "#777",
    },

})

export default Landing;
