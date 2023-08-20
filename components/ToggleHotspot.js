import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function ToggleHotspot(props) {
  const [index, setIndex] = useState(null)
  const [list, setList] = useState([])
  const { itemName } = props;

  useEffect(() => {
    getHotspots().then((hotspots) => {
      setList(hotspots)
      const hotspotIndex = hotspots.findIndex(hotspot => hotspot.name === itemName)
      setIndex(hotspotIndex)
    });
  }, []);


  async function getHotspots() {
    const hotspotJSON = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'hotspots.json')
    const hotspots = JSON.parse(hotspotJSON)
    if (!hotspots || !Array.isArray(hotspots)) {
      return [];
    }
    return hotspots;
  }

  function writeHotspots(msg) {
    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'hotspots.json', JSON.stringify(list))
      .then(() => {
        alert(msg);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function removeHotspot() {
    const newList = list
    newList.splice(index, 1)
    setList(newList)
    setIndex(-1)
    writeHotspots('Hotspot removed!')
  }

  async function addHotspot() {
    const newList = list
    newList.push(route.params.item)
    setList(newList)
    setIndex(list.length - 1)
    writeHotspots('Hotspot added!')
  }

  if (index !== -1) {
    return <Button title="Remove from my hotspots" onPress={removeHotspot} />
  } else {
    <Button title="Add to my hotspots" onPress={addHotspot} />
  }
}
