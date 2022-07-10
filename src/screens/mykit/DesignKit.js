import React from 'react';
import { View, StyleSheet, ScrollView,Touchable,SafeAreaView, Button, TextInput, Image, Text } from 'react-native';

const Designkit = () => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={[styles.size,{ flex: 1, backgroundColor: "red" }]} >
                    <Text>yiuyiuyuiy</Text>
                    </View>
                    <View style={[styles.size,{ flex: 1, backgroundColor: "red" }]} >
                    <Text>yiuyiuyuiy</Text>
                    </View>
                    <View style={[styles.size,{ flex: 1, backgroundColor: "red" }]} >
                    <Text>yiuyiuyuiy</Text>
                    </View>
                    <View style={[styles.size,{ flex: 1, backgroundColor: "red" }]} >
                    <Text>yiuyiuyuiy</Text>
                    </View>
                <View style={{ flex: 2, backgroundColor: "darkorange" }} />
                <View style={{ flex: 3, backgroundColor: "green" }} />
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // padding: 20,
    },
    size: {
        height: 190,
    },

});

export default Designkit;
