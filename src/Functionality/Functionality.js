import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Touchable, SafeAreaView, Button, TextInput, Image, Text } from 'react-native';
import axios from 'axios';
import Tts from 'react-native-tts';

import personData from './personData.json';


import Voice from '@react-native-voice/voice';



import SystemSetting from 'react-native-system-setting'

const Functionality = () => {

    const [recognized, setRecognized] = useState('');
    const [results, setResults] = useState([]);
    useEffect(() => {
        // text to speach
        // Tts.voices().then(voices => console.log(voices));
        Tts.setDefaultLanguage('ar');
        // Tts.setDefaultVoice('ar-xa-x-are-local');
        // Tts.setDefaultVoice('ar-xa-x-arc-network');
        // Tts.setDefaultVoice('ar-xa-x-ard-network');
        // Tts.setDefaultVoice('ar-xa-x-arz-local');
        Tts.setDefaultVoice('ar-language');
        // Tts.setDefaultVoice('ar-xa-x-are-network');
        Tts.setDefaultRate(0.5);
        Tts.setDefaultPitch(0.7);

        // speach to text
        Voice.onSpeechResults = onSpeechResults;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);
    const onSpeechResults = (e) => {
        console.log('onSpeechResults: ', e);
        setResults(e.value);
    };
    useEffect(() => {
        checkResult()
    }, [results]);


    const recognisionCamera = () => {
        console.log("hii");

        axios.get('http://192.168.1.4:3001')
            .then(function (response) {
                // speek 
                // // Tts.voices().then(voices => console.log(voices));
                // Tts.setDefaultLanguage('ar');
                // // Tts.setDefaultVoice('ar-xa-x-are-local');
                // // Tts.setDefaultVoice('ar-xa-x-arc-network');
                // // Tts.setDefaultVoice('ar-xa-x-ard-network');
                // // Tts.setDefaultVoice('ar-xa-x-arz-local');
                // Tts.setDefaultVoice('ar-language');
                // // Tts.setDefaultVoice('ar-xa-x-are-network');
                // Tts.setDefaultRate(0.5);
                // Tts.setDefaultPitch(0.7);

                // Tts.speak(response?.data[0]?._label
                if (personData[response?.data[0]?._label]) {
                    Tts.speak(personData[response?.data[0]?._label]);
                } else {
                    Tts.speak(response?.data[0]?._label);
                }
                //     Tts.speak(" من فضلك ادخل ما تريد mostafa تسجيله والمعادالمحدد"
                //     // ,{ iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
                // //  
                // //     androidParams: {
                // //         KEY_PARAM_PAN: 1,
                // //         KEY_PARAM_VOLUME: 1,
                // //         KEY_PARAM_STREAM: 'STREAM_MUSIC',
                // //     },
                // // }
                // );
                console.log(response?.data[0]?._label);
            })
    }

    const checkResult = () => {
        const text = results + "";
        if (text.search("who") != -1) {
            recognisionCamera()
        }
        console.log(results + "");

    }
    const recognisionCameraByVoice = async () => {
        try {
            await Voice.start('en-US');
            console.log('called start');
        }
        catch (e) {
            console.error(e);
        }
        // axios.get('http://192.168.1.2:3001')
        //     .then(function (response) {
        //         // speek 
        //         Tts.speak(response?.data[0]?._label, {
        //             androidParams: {
        //                 KEY_PARAM_PAN: 1,
        //                 KEY_PARAM_VOLUME: 1,
        //                 KEY_PARAM_STREAM: 'STREAM_MUSIC',
        //             },
        //         });
        //         console.log(response?.data[0]?._label);
        //     })
    }

    const [soundVolume, setSoundVolume] = useState(0);
    const [soundChange, setSoundChange] = useState(0);
    // useEffect(() => {
    //     SystemSetting.getVolume().then((volume) => {
    //         console.log('Current volume is ' + volume);
    //         setSoundVolume(volume)
    //     });
    // }, []);

    // listen the volume changing if you need
    let sound = 0;
    volumeListener = SystemSetting.addVolumeListener((data) => {
        const volume = data.value;
        if (volume != sound) {
            if (volume > sound) {
                recognisionCameraBySoundVolum(volume, "increase");
            } else if (volume < sound) {
                recognisionCameraBySoundVolum(volume, "decrease");
            }
            sound = volume;
        }

    });
    const recognisionCameraBySoundVolum = (volume, change) => {
        if (change == "increase") {
            console.log("increase");
            Tts.speak("مرحبا انا مساعدك الشخصي كيف يمكنني المساعده");

        } else if (change == "decrease") {
            console.log("decrease");
        }
        // console.log(volume);
        // console.log(change);
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "column"
            }]}>
                <View style={[styles.size, { flex: 1, backgroundColor: "black" }]} >
                    <Text onPress={recognisionCamera} style={styles.text}>Recognision Camera</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "gray" }]} >
                    <Text onPress={recognisionCameraByVoice} style={styles.text}>Recognision By Voice</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "black" }]} >
                    <Text style={styles.text}>Recognision by handfree button</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "gray" }]} >
                    <Text style={styles.text}>voice instraction</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "black" }]} >
                    <Text style={styles.text}>remender</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "gray" }]} >
                    <Text style={styles.text}>Recognision</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "black" }]} >
                    <Text style={styles.text}>Recognision</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "gray" }]} >
                    <Text style={styles.text}>Recognision</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>

                <View style={[styles.size, { flex: 1, backgroundColor: "black" }]} >
                    <Text style={styles.text}>Recognision</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>
                <View style={[styles.size, { flex: 1, backgroundColor: "gray" }]} >
                    <Text style={styles.text}>Recognision</Text>
                    <Text style={styles.textSmall}>Recognision</Text>
                </View>

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
        alignItems: "center"
    },
    text: {
        fontSize: 50
    },
    textSmall: {
        fontSize: 20
    },

});

export default Functionality;
