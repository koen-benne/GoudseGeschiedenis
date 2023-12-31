import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDarkMode } from '../providers/DarkModeContext';
import Map from '../components/Map';
import LocalHotspotOptions from '../components/LocalHotspotOptions';

function HotspotDetail({ route }) {
  const item = route.params.item;
  const { coordinate, name, subtitle } = item;
  const [isConnected, setIsConnected] = useState(true);
  const { isDarkMode } = useDarkMode();

  // Check for internet connection
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [])


  const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      color: isDarkMode ? "white" : "black"
    },
    subtitle: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
      color: isDarkMode ? "white" : "black"
    },
    offline: {
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
      color: "red"
    },
  });

  return (
    <View>
      {
        !isConnected ?
          <Text style={styles.offline}>You are offline. This map may not load.</Text>
        :
          <Map coordinate={coordinate} name={name} subtitle={subtitle}/>
      }
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <LocalHotspotOptions item={item}/>
    </View>
  );
}

export default HotspotDetail;

