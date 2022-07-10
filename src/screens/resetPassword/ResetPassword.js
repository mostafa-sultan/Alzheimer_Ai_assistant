import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ResetPassword({ navigation }) {
  const [verify, setVerify] = useState(""); 

  const handelInput = () => {
    console.log(verify);
  };


  return (
    <ScrollView>

      <View style={styles.container}>
        <Image style={styles.image} source={require("../../images/logo.jpg")} />

        {/* <TouchableOpacity>
          <Text style={styles.forgot_button}>Check your email ..</Text>
        </TouchableOpacity> */}

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Your Email"
            placeholderTextColor="#003f5c"
            onChangeText={(code) => setVerify(code)}
          />
        </View>

   
{/* 
        <TouchableOpacity>
          <Text style={styles.reg_button}>Resend?  </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('Verify')}>
          <Text style={styles.loginText}>Send Code</Text>
        </TouchableOpacity>
      </View>

    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 250,
    height: 250,
  },

  inputView: {
    backgroundColor: "#4DFA9E",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
      color: "black",
      fontSize:30,
      fontFamily: "Helvetica",
    // height: 30,
    marginBottom: 10,
  },
  reg_button: {
    opacity: 0.7,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3BB2E3",
  },
});

 