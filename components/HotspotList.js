import HotspotItem from './HotspotItem'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://randomuser.me/api/portraits/men/36.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

// Add ability to add rating
export default function HotspotList() {
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

