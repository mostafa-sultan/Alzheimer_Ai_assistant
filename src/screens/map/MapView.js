import React, {useState, useEffect ,useRef} from 'react';
import { View, StyleSheet,Text ,Button} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker ,Polyline,Circle  } from 'react-native-maps';

import {decode} from "@mapbox/polyline"; //please install this package before running!
const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = "YOUR GOOGLE API KEY"; //put your API key here.
    //otherwise, you'll have an 'unauthorized' error.
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    // console.log(points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};




const Mapview = () => {
  const [coords, setCoords] = useState([]); 
  const [region, setRegion] = useState({  });
  const [clickk, setClick] = useState(null);

  const mapRef = useRef(null);


  useEffect(() => {
    //fetch the coordinates and then store its value into the coords Hook.
    getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
      .then(coords => setCoords(coords))
      .catch(err => console.log("Something went wrong"));
  }, []);

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const goToTokyo = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(tokyoRegion, 3 * 1000);
  };
  return (

    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 30.602375,
          longitude: 30.850579,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0021,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
        mapType="standard"

        // onPress={(e) => setClick({ clickk: e.nativeEvent.coordinate })}>
          onPress={(e) => console.log(e.nativeEvent.coordinate)}> 
   
   <Circle
            center={{
              latitude: 30.602375,
              longitude: 30.850579,
            }}
            radius={100}
            fillColor="rgba(85, 115, 0, 0.5)"
            strokeColor="rgba(0,0,0,0.5)"
            zIndex={1}
            strokeWidth={1}
          />
        <Marker
          coordinate={{ latitude: 30.602375, longitude: 30.850579 }}
        />



         {coords.length > 6 && <Polyline coordinates={coords} />}
      </MapView>
      <Text >click: {clickk}</Text>
      <Text >Current latitude: {region.latitude}</Text>
    <Text >Current longitude: {region.longitude}</Text>
    <Button onPress={() => goToTokyo()} title="Go to Tokyo" />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Mapview;
