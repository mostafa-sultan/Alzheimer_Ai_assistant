import React from 'react';
import SliderIntro from 'react-native-slider-intro';
import { View, Text, styles, TouchableOpacity } from 'react-native';

const slides = [
  {
    key: 1,
    title: 'Welcome To The Guard',
    text: 'View Kids\' Real-Time Location Track the current location of your kids. Stop calling kids \"where are you?\" all the time.',
    image: require('../../images/slider/1.png'),
     backgroundColor: '#2998ff',
  },
  {
    index: 2,
    title: 'Check Location History',
    text: 'View location history timeline to know kids\' past routine. Never yell at your kids: \"Where have you been?\" again.',
    image: require('../../images/slider/2.png'),

    backgroundColor: '#7ed56f',
  },
  {
      index: 3,
      title: 'Check Location History',
      text: 'Create zones like \"school\" or \"home\" around specific locations. Get notified when kids break planned routines.',
      image: require('../../images/slider/3.png'),
      backgroundColor: '#ffb900',
  },
  // {
  //     index: 4,
  //     title: 'الان مع الحارث اصبحت الحياه اجمل',
  //     text: 'Here you can open a custom link.',
  //     link: 'https://devss.netlify.app/',
  //     image: require('../../images/adel.jpg'),
  //     backgroundColor: '#88be29',
  // },
];




const IntroSlider = ({ navigation }) => {

  const renderNextButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text >Next</Text>
      </TouchableOpacity>
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text >Done</Text>
      </TouchableOpacity>
    );
  };

  const renderSkipButton = () => {
    return (

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text >Skip</Text>
      </TouchableOpacity>

    );
  };
  return (
    <SliderIntro
      // renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      navContainerMaxSizePercent={0.3}
      navigationBarHeight={150}
      // columnButtonStyle={true}
      data={slides}
    />)
};
export default IntroSlider;
