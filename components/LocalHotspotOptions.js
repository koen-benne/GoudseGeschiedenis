import React, { useState, useEffect } from 'react';
import { Button, KeyboardAvoidingView, TextInput } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useDarkMode } from '../providers/DarkModeContext';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';

export default function LocalHotspotOptions(props) {
  const [index, setIndex] = useState(null)
  const [list, setList] = useState([])
  const [rating, setRating] = useState("")
  const { item } = props;
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    getHotspots().then((hotspots) => {
      setList(hotspots)
      const hotspotIndex = hotspots.findIndex(hotspot => hotspot.name === item.name)
      setIndex(hotspotIndex)
      if (hotspotIndex !== -1) {
        setRating(hotspots[hotspotIndex].rating)
      }
    });
  }, []);


  // Fetch the data from the file system
  async function getHotspots() {
    const hotspotJSON = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'hotspots.json')
    const hotspots = JSON.parse(hotspotJSON)
    if (!hotspots || !Array.isArray(hotspots)) {
      return [];
    }
    return hotspots;
  }

  // Write the data to the file system
  function writeHotspots(msg) {
    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'hotspots.json', JSON.stringify(list))
      .then(() => {
        console.log(msg);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Remove the hotspot from the list
  function removeHotspot() {
    const newList = list
    newList.splice(index, 1)
    setList(newList)
    setIndex(-1)
    writeHotspots('Hotspot removed!')
  }

  // Add the hotspot to the list
  async function addHotspot() {
    const newList = list
    newList.push(item)
    setList(newList)
    setIndex(list.length - 1)
    writeHotspots('Hotspot added!')
  }

  const style = {
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      color: isDarkMode ? 'white' : 'black',
      backgroundColor: isDarkMode ? 'black' : 'white'
    }
  }

  // If the hotspot is already in the list, show the remove button
  if (index !== -1) {
    return (
      <>
        <Button title="Remove from my hotspots" onPress={removeHotspot} />
        <KeyboardAccessoryView
          alwaysVisible={true}
          hideBorder={true}
        >
          <TextInput
            name="rating"
            value={rating}
            onChangeText={text => {
              const newList = list
              newList[index].rating = text
              setList(newList)
              setRating(text)
              writeHotspots('Rating updated!')
            }}
            placeholder="Rating"
            style={style.input}
          />
      </KeyboardAccessoryView>
      </>
    );
  } else {
    return <Button title="Add to my hotspots" onPress={addHotspot} />
  }
}
