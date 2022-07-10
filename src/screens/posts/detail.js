import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Detail extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHXP0XTtYG6Tv291OrrjAdGOaQzd0ZTIudw&usqp=CAU"}} />
        <Text style={styles.title}>الموديل 33</Text>
        <Text style={styles.description}>يمكنها التتبع ومراقبه حاله ضغط الدم</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.clickListener('login')}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:50,
  },
  icon:{
    width:320,
    height:420,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:22,
    color: "#5F6D7A"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:16,
    margin:40,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
  }
});
 