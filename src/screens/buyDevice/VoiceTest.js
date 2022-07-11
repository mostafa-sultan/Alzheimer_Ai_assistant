import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, } from 'react-native';
import Voice from '@react-native-voice/voice';
function VoiceTest() {
    const [recognized, setRecognized] = useState('');
    const [volume, setVolume] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);
    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechRecognized = onSpeechRecognized;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
        Voice.onSpeechPartialResults = onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);
    const onSpeechStart = (e) => {
        console.log('onSpeechStart: ', e);
        setStarted('√');
    };
    const onSpeechRecognized = (e) => {
        console.log('onSpeechRecognized: ', e);
        setRecognized('√');
    };
    const onSpeechEnd = (e) => {
        console.log('onSpeechEnd: ', e);
        setEnd('√');
    };
    const onSpeechError = (e) => {
        console.log('onSpeechError: ', e);
        setError(JSON.stringify(e.error));
    };
    const onSpeechResults = (e) => {
        console.log('onSpeechResults: ', e);
        setResults(e.value);
    };
    const onSpeechPartialResults = (e) => {
        console.log('onSpeechPartialResults: ', e);
        setPartialResults(e.value);
    };
    const onSpeechVolumeChanged = (e) => {
        console.log('onSpeechVolumeChanged: ', e);
        setVolume(e.value);
    };
    const _startRecognizing = async () => {
      console.log(Voice);
        _clearState();
        try {
            await Voice.start('en-US');
            console.log('called start');
        }
        catch (e) {
            console.error(e);
        }
    };
    const _stopRecognizing = async () => {
        try {
            await Voice.stop();
        }
        catch (e) {
            console.error(e);
        }
    };
    const _cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        }
        catch (e) {
            console.error(e);
        }
    };
    const _destroyRecognizer = async () => {
        try {
            await Voice.destroy();
        }
        catch (e) {
            console.error(e);
        }
        _clearState();
    };
    const _clearState = () => {
        setRecognized('');
        setVolume('');
        setError('');
        setEnd('');
        setStarted('');
        setResults([]);
        setPartialResults([]);
    };
    return (React.createElement(View, { style: styles.container },
        React.createElement(Text, { style: styles.welcome }, "Welcome to React Native Voice!"),
        React.createElement(Text, { style: styles.instructions }, "Press the button and start speaking."),
        React.createElement(Text, { style: styles.stat }, `Started: ${started}`),
        React.createElement(Text, { style: styles.stat }, `Recognized: ${recognized}`),
        React.createElement(Text, { style: styles.stat }, `Volume: ${volume}`),
        React.createElement(Text, { style: styles.stat }, `Error: ${error}`),
        React.createElement(Text, { style: styles.stat }, "Results"),
        results.map((result, index) => {
            return (React.createElement(Text, { key: `result-${index}`, style: styles.stat }, result));
        }),
        React.createElement(Text, { style: styles.stat }, "Partial Results"),
        partialResults.map((result, index) => {
            return (React.createElement(Text, { key: `partial-result-${index}`, style: styles.stat }, result));
        }),
        React.createElement(Text, { style: styles.stat }, `End: ${end}`),
        React.createElement(TouchableHighlight, { onPress: _startRecognizing },
            React.createElement(Image, { style: styles.button, source: require('./button.png') })),
        React.createElement(TouchableHighlight, { onPress: _stopRecognizing },
            React.createElement(Text, { style: styles.action }, "Stop Recognizing")),
        React.createElement(TouchableHighlight, { onPress: _cancelRecognizing },
            React.createElement(Text, { style: styles.action }, "Cancel")),
        React.createElement(TouchableHighlight, { onPress: _destroyRecognizer },
            React.createElement(Text, { style: styles.action }, "Destroy"))));
}
const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    action: {
        textAlign: 'center',
        color: '#0000FF',
        marginVertical: 5,
        fontWeight: 'bold',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
    },
});
export default VoiceTest;
// import React, { useEffect, useState } from 'react';
// import { View, Image, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
// // import Voice from '@react-native-community/voice';
// import Voice from '@react-native-voice/voice';
// const VoiceTest = () => {
//   const [result, setResult] = useState('')
//   const [isLoading, setLoading] = useState(false)
//   const onSpeechStartHandler = (e) => {
//     console.log("start handler==>>>", e)
//   }
//   const onSpeechEndHandler = (e) => {
//     setLoading(false)
//     console.log("stop handler", e)
//   }

// {"_events": {"onSpeechEnd": [Function onSpeechEnd], "onSpeechError": [Function onSpeechError], "onSpeechPartialResults": [Function onSpeechPartialResults], "onSpeechRecognized": [Function onSpeechRecognized], "onSpeechResults": [Function onSpeechResults], "onSpeechStart": [Function onSpeechStart], "onSpeechVolumeChanged": [Function onSpeechVolumeChanged]}, "_listeners": null, "_loaded": false}
//   const onSpeechResultsHandler = (e) => {
//        console.log("speech result handler" )
//  let text = e.value[0]
//     setResult(text)
//   }
//   useEffect(() => {
//     Voice.onSpeechStart = onSpeechStartHandler;
//     Voice.onSpeechEnd = onSpeechEndHandler;
//     Voice.onSpeechResults = onSpeechResultsHandler;
//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     }
//   }, [])
//   const startRecording = async () => {
//     setLoading(true)
//     try {
//       await Voice.start('en-Us')
//     } catch (error) {
//       console.log("error raised", error)
//     }
//   }
//   const stopRecording = async () => {
//     try {
//       await Voice.stop()
//     } catch (error) {
//       console.log("error raised", error)
//     }
//   }
//   return (
//     <View style={styles.container}>
//       <SafeAreaView>
//         <Text style={styles.headingText}>Speech Recoginition</Text>
//         <View style={styles.textInputStyle}>
//           <TextInput
//             value={result}
//             placeholder="your text"
//             style={{ flex: 1 }}
//             onChangeText={text => setResult(text)}
//           />
//           {/* {isLoading ? <ActivityIndicator size="large" color="red" />
//             : */}
//             <TouchableOpacity
//               onPress={startRecording}
//             >
//               <Image
//                 source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
//                 style={{ width: 25, height: 25 }}
//               />
//             </TouchableOpacity>
//             {/* } */}
//         </View>
//         <TouchableOpacity
//           style={{
//             alignSelf: 'center',
//             marginTop: 24,
//             backgroundColor: 'red',
//             padding: 8,
//             borderRadius: 4
//           }}
//           onPress={stopRecording}
//         >
//           <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24
//   },
//   headingText: {
//     alignSelf: 'center',
//     marginVertical: 26,
//     fontWeight: 'bold',
//     fontSize: 26
//   },
//   textInputStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     height: 48,
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 2,
//     elevation: 2,
//     shadowOpacity: 0.4
//   }
// });
// export default VoiceTest;
