import HotspotItem from './HotspotItem'
import { useState, useEffect } from 'react'

export default function HotspotList() {
  const [ list, setList ] = useState([])

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

