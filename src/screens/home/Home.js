import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* <ScrollView style={{flex : 4}}> */}

      <View style={styles.header}>
        <Text style={styles.headerStyle}>Name</Text>
        <Image style={styles.image} source={require('../../images/img.png')} />

      </View>

      <View style={styles.addDevice}>
        <Text style={styles.headerStyle}>ADD DEVICE SECTION</Text>


      </View>
      <View style={styles.cards}>
        <Text style={styles.headerStyle}>CARD SECTION</Text>


      </View>
      {/* </ScrollView> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
    height: 600

  },
  headerStyle: {
    marginTop:12,
    fontSize: 36,
    fontFamily: 'Helvetica',
  },
  header: { 
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "gray",
    padding:10,
  },
  addDevice: {
    flex: 2,
    // backgroundColor: "red",
  },
  cards: {
    flex: 2,
    // backgroundColor: "green",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 90,
    // marginLeft: 90,

  },
})

export default Home;
