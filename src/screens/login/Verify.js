
import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const Verify = () => {
    return (
        <View style={styles.container}>
            <View style={styles.banar}>
                <Image style={styles.image} source={require("../../images/logo.jpg")} />
                <Text style={styles.title}>Live Gurd</Text> 
            </View> 
            <View style={styles.form}>
                <Text style={styles.title2}>Check your email</Text> 
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#fff"
                    placeholder="Code."
                />
                <Text style={{ ...styles.log_button, width: "90%", textAlign: "right", marginTop: 8 }}>Resend?</Text>

                <TouchableOpacity
                    style={styles.login}>
                    <Text style={styles.loginText}>Verify</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#55c57a",
        // padding: (10, 20, 10, 5),

    },
    banar: {
        flex: 1,
        // backgroundColor: "#322",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: (0, 30)
    },
    image: {
        height: "40%",
        width: "20%"
    },
    title: {
        width: "80%",
        paddingLeft: 20,
        color: "#fff",
        fontSize: 37
    },
    title2: {
        width: "100%",
        paddingLeft: 20,
        color: "#fff",
        fontSize: 37,
        margin: 30
    },
    form: {
        flex: 3,
        // backgroundColor: "#992",
        alignItems: "center",
        padding: (0, 30)

    },
    TextInput: {
        width: "90%",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        color: "#fff"

    },
    login: {
        backgroundColor: "#fff",
        width: "90%",
        borderRadius: 30,
        alignItems: "center",
        padding: 17,
        marginTop: 30,
        marginBottom: 14

    },
    loginText: {
        fontSize: 19,
        color: "#55c57a"
    },
    log_button: {
        color: "#eee",
    }
})

export default Verify;
