import * as FileSystem from 'expo-file-system';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from 'react-native';
import HotspotItem from '../components/HotspotItem';

export default function MyHotspots() {
  async function getHotspots() {
    const hotspotJSON = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'hotspots.json')
    const hotspots = JSON.parse(hotspotJSON)
    if (!hotspots || !Array.isArray(hotspots)) {
      return [];
    }
    return hotspots;
  }

  const [list, setList] = useState([])

  useFocusEffect(() => {
    getHotspots().then((hotspots) => {
      setList(hotspots)
    })
  })

  if (list.length === 0) {
    return <Text>You have no hotspots yet!</Text>
  }

  return (
    <>
      {
        list.map((item, i) => (
          <HotspotItem item={item} index={i}/>
        ))
      }
    </>
  );
}

