import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Hedar = () => {
    return (
        <View style={styles.hedar}>
            
                <Image
                    source={require("../../screens/test/travel/images/1.jpg")}
                    style={styles.imgContiner}
                />
                {/* <Text>dgjhd</Text> */}
             <Icon style={styles.icon} name="bell" size={32} />

        </View>
    );
}

const styles = StyleSheet.create({
    hedar: {
        // backgroundColor: '#55F',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        width: '100%',
        padding: (3, 15),
        alignItems: "center",
       },
    icon: {
        color: '#000',

    },
    imgContiner: { 
        height: 45,
        width: 45,
        borderRadius: 50,
        // backgroundColor: "#ddd",
    },

})

export default Hedar;
