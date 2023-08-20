import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Map(props) {
  const { name, subtitle, coordinate } = props;
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    })();
  }, []);

  const initialRegion = {
    ...coordinate,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={coordinate}
          title={name}
          description={subtitle}
        />
        <Marker
          coordinate={currentLocation}
          title="You are here"
          description="Your current location"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
    top: 0,
    width: "100%",
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  },
});
