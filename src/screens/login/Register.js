import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const Regsiter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.banar}>
                <Image style={styles.image} source={require("../../images/logo.jpg")} />
                <Text style={styles.title}>Live Gurd</Text>

            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#fff"
                    placeholder="Name."
                />
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#fff"
                    placeholder="Phone."
                />
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#fff"
                    placeholder="Email."
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    style={styles.login}>
                    <Text style={styles.loginText}>Regsiter</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.log_button}>Do you have account? singin</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.social}>
                <Text style={styles.socialText}>_____ or continue with ______</Text>

                <View style={styles.row}>

                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#ddd",
                            marginRight: 19
                        }}
                    >

                        <Image
                            source={require("../test/travel/images/alarm.png")}
                            style={{ height: 24, width: 24 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#ddd",
                        }}
                    >

                        <Image
                            source={require("../test/travel/images/alarm.png")}
                            style={{ height: 24, width: 24 }}
                        />
                    </TouchableOpacity>
                </View>
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
        flex: 0.5,
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
    form: {
        flex: 1,
        // backgroundColor: "#992",
        alignItems: "center",
        justifyContent: "center",
        padding: (0, 30)

    },
    TextInput: {
        width: "90%",
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        color: "#fff"

    },
    social: {
        flex: 0.6,
        // backgroundColor: "#777",
        alignItems: "center",
        justifyContent: "center",
        padding: (0, 30)

    },
    socialText: {
        color: "#fff",
        margin: 20,
        fontSize: 17
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
    },
    row: {
        flexDirection: "row"
    }
})

export default Regsiter;
