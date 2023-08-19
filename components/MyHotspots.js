import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed'

export default function MyHotspots() {
  const list = [];

  return (
    <>
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
          <Avatar rounded source={{uri: l.avatar_url}} />
          <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          </ListItem>
        ))
      }
    </>
  );
}

const styles = StyleSheet.create({
});
