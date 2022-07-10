import React, { useState } from "react";
import { View, Text, Alert, Modal, Image, ScrollView, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalCard from "./ModalCard";
import ListCard from "./ListCard";
// import { ScrollView } from "react-native-gesture-handler";

export default  Detail = () => {

  const [modalVisible, setModalVisible] = useState(false);
 
 
    return (
      <ImageBackground
        source={require("../images/back2.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Icon name="bars" size={30} color="#a2a2db" style={{ width: 20 }} />
          <Icon
            name="address-book-o"
            size={33}
            color="#a2a2db"
            style={{ marginLeft: 230 }}
          />
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/1.jpg")}
              style={{ height: 70, width: 70 ,borderRadius:30}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            Home
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            School
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
          }}
        >
     
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              paddingLeft: 232,
              fontSize:20,
            }}
          >
            4:AM
          </Text> 
           <Text
          style={{
            paddingHorizontal: 0,
            color: "#a2a2db",
            fontFamily: "RobotoRegular",
            fontSize:20,
          }}
        >
          4:PM
        </Text>
        </View>
      

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 60,
          }}
        >
          <Image
            source={require("../images/dots.png")}
            style={{ width: 18, height: 16 }}
          />
          <Image
            source={require("../images/filter.png")}
            style={{ marginLeft: 228, width: 20, height: 18 }}
          />
        </View> */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
          }}
        >
          <ListCard
          
          />
          <ListCard
           
          />
          <ListCard
            // onPress={() => {
            //   this.setModalVisible(true);
            // }}
          />

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal is closed");
              }}
            >
              <ModalCard
                // onPress={() => {
                //   this.setModalVisible(!modalVisible);
                // }}
              />
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  
}
