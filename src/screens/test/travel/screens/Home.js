import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Hedar from "../../../../component/hedar/Hedar";

export default Home = ({ navigation }) => {

  return (
    <ImageBackground
      source={require("../images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
   <Hedar/>
      <View style={{ paddingHorizontal: 20, marginTop: 79 }}>
        <Text
          style={{
            fontSize: 40,
            color: "#28b485",
            fontFamily: "RobotoBold",
          }}
        >
          Hello  Mostafa
        </Text>

        <Text
          style={{
            fontSize: 16,
            paddingVertical: 10,
            paddingRight: 80,
            lineHeight: 22,
            fontFamily: "RobotoRegular",
            color: "#777",
          }}
        >
          Don't worry anymore We are watching and making sure of safety for you

        </Text>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 40,
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 30,
          }}
        >
          <Image
            source={require("../images/search.png")}
            style={{ height: 14, width: 14 }}
          />
          <TextInput
            placeholder="Search         "
            placeholderTextColor="#777"
            style={{  fontSize: 15, color: "#55c57a"  }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginRight: -10, marginTop: 30 }}
        >
          <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("Detail")}
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
              source={require("../images/blog.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: "#ddd",
              marginHorizontal: 22,
            }}
          >
            <Image
              source={require("../images/setting.png")}
              style={{ height: 24, width: 24 }}
            />
          </View>

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: "#ddd",
            }}
            onPress={() =>  navigation.navigate('Detail')}
          >

            <Image
              source={require("../images/alarm.png")}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 66,
              width: 66,
              borderRadius: 50,
              backgroundColor: "#ddd",
              marginLeft: 22,
            }}
          >

            <Image
              source={require("../images/plus.png")}
              style={{ height: 24, width: 24 }}
            />
            {/* <Icon name="dots-horizontal" color="white" size={32} /> */}
          </View>
        </ScrollView>

        <Text
          style={{
            color: "#fff",
            fontFamily: "RobotoRegular",
            marginTop: 40,
            fontSize: 20,
          }}
        >
          Devises
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: -40, marginTop: 30 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
            }}
            onPress={() =>  navigation.navigate('Mapview')}
          >
            <Image
              source={require("../images/1.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Lorem impsum dolor sit amet, consectetuer adipscing elit,
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#ff5c83" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 20,
            }}
            onPress={() =>  navigation.navigate('Mapview')}>
            <Image
              source={require("../images/2.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Lorem impsum dolor sit amet, consectetuer adipscing elit,
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#5facdb" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#FEFEFE",
              height: 200,
              width: 190,
              borderRadius: 15,
              padding: 5,
            }}
            onPress={() =>  navigation.navigate('Mapview')}>
            <Image
              source={require("../images/3.jpg")}
              style={{ width: 180, borderRadius: 10, height: 130 }}
            />
            <View
              style={{
                flexDirection: "row",
                width: 150,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "RobotoRegular",
                    fontSize: 11,
                    color: "#a2a2db",
                  }}
                >
                  Lorem impsum dolor sit amet, consectetuer adipscing elit,
                </Text>
              </View>
              <Icon name="map-marker" size={25} color="#bb32fe" />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );

}
