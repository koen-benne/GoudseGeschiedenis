import { useState, useEffect } from 'react'
import HotspotItem from '../components/HotspotItem'

export default function HotspotList() {
  const [ list, setList ] = useState([])

  // Fetch the data from the JSON file
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/koen-benne/GoudseGeschiedenis/main/data.json')
      .then(response => response.json())
      .then(data => {
        setList(data)
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });
  }, []);

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

