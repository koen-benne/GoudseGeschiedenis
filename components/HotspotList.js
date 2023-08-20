import HotspotItem from './HotspotItem'

const list = [
  {
    name: 'De Waag',
    avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipN-OUPVXb2sKrnoa_H2L3rC67olsMRUWz6eeD4T=w203-h270-k-no',
    subtitle: 'museum',
    coordinate: {
      latitude: 52.012803467406314,
      longitude: 4.710881652459761
    }
  },
  {
    name: 'Stadhuis van Gouda',
    avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipNOdWIi1FF0nQ4ICjVsANrswcszxpeY0yhEfWk=w203-h270-k-no',
    subtitle: 'stadhuis van Gouda',
    coordinate: {
      latitude: 52.01174,
      longitude: 4.71050
    }
  },
  {
    name: 'Sint-Janskerk',
    avatar_url: 'https://lh5.googleusercontent.com/p/AF1QipMA9yt5pMQ_58npB9Fq3vRno5m7u0h_WznZP6mz=w203-h134-k-no',
    subtitle: 'kerk',
    coordinate: {
      latitude: 52.01103824979288,
      longitude: 4.710743708757333
    }
  }
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

