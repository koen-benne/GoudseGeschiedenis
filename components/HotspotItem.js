import { StyleSheet } from 'react-native';
import { ListItem, Avatar } from '@rneui/themed'
import { useDarkMode } from '../providers/DarkModeContext';
import { useNavigation } from '@react-navigation/native';

// Create list item component and add dark mode styles to it
export default function HotspotItem(props) {
  const { isDarkMode } = useDarkMode();
  const navigation = useNavigation();
  const { item, i: index } = props

  const styles = StyleSheet.create({
    text: {
      color: isDarkMode ? '#fff' : '#000',
    },
    container: {
      backgroundColor: isDarkMode ? '#151515' : '#fff',
      borderBottomColor: isDarkMode ? '#444' : '#ccc',
    },
  });

  const navigateToDetail = () => {
    navigation.navigate('HotspotDetail', { item });
  };

  return (
    <ListItem key={index} bottomDivider containerStyle={styles.container} onPress={navigateToDetail}>
      <Avatar rounded source={{uri: item.avatar_url}} />
      <ListItem.Content>
        <ListItem.Title style={styles.text}>{item.name}</ListItem.Title>
        <ListItem.Subtitle style={styles.text}>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

