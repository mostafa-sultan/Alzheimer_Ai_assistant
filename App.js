import React from 'react';

import { Provider } from 'react-redux';

import { store } from './src/redux/store';

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text } from 'react-native';
import Adddevice from './src/screens/addDevice/AddDevice';
import Buy from './src/screens/buyDevice/Buy';
// import Home from './src/screens/home/Home';
import IntroSlider from './src/screens/introSlider/IntroSlider';
import Login from './src/screens/login/Login';
import Mapview from './src/screens/map/MapView';
// import Detail from './src/screens/posts/detail';
// import Regsiter from './src/screens/register/Register';
import Tasks from './src/screens/tasks/Tasks';
import UserProfile from './src/screens/userProfile/UserProfile';
import Posts from './src/screens/posts/Posts';
import Register from './src/screens/register/Register';
import Reduxscreen from './src/screens/redux/ReduxScreen';
import Designkit from './src/screens/mykit/DesignKit';
// import Verify from './src/screens/verify/Verify';
import ResetPassword from './src/screens/resetPassword/ResetPassword';
// import Test from './src/screens/test/Test';
// import Devices from './src/screens/test/devices/Devices';
import Home from './src/screens/test/travel/screens/Home';
import Detail from './src/screens/test/travel/screens/Detail';
import Landing from './src/screens/test/land/Landing';
import Login2 from './src/screens/login/Login2';
import Regsiter from './src/screens/login/Register';
import Verify from './src/screens/login/Verify';
import Emptyhome from './src/screens/test/emptyHome/EmptyHome';
import VoiceTest from './src/screens/buyDevice/VoiceTest';
// import Ex from './src/screens/test/customDrwer/Ex';
// import Home from './src/screens/test/home/Home';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {


  return (
    // <Ex/>
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Login2">
    //     <Drawer.Screen name="Login2" component={Login2} />
    //     <Drawer.Screen name="Home" component={Home} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    // <Detail/>
    // <Home/>
    // <Devices/>
    // <Home />
    //  <Test/>
    // <Landing/>
    // <Login2/>
    // <Regsiter/>
    // <Verify/>
    // <Emptyhome/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="IntroSlider">
    //     <Stack.Screen options={{ headerShown: false }} name="IntroSlider" component={IntroSlider} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Register" component={Register} />
    //     <Stack.Screen name="Verify" component={Verify} />
    //     <Stack.Screen name="ResetPassword" component={ResetPassword} /> 
    //     <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
    //     <Stack.Screen  name="Detail" component={Detail} />
    //     <Stack.Screen name="Mapview" component={Mapview} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <Designkit /> 
    // <IntroSlider/> 
    // <Provider store={store}>
    // <Reduxscreen/>
    // </Provider>
    // <Login />
    // <Verify/>
    // <ResetPassword/>
    // <Register/>
   //<Home />
    // <Adddevice/>
    //  <Buy />
     <VoiceTest/>
    // <Detail/>
     // <Mapview/>
    // <Posts/>
    // <Tasks/>
    // <UserProfile/>

  );
};
export default App;
