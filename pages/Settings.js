import { StyleSheet, Switch, Text, View } from 'react-native';
import { useDarkMode } from '../providers/DarkModeContext';

export default function Settings() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    settingTitle: {
      color: isDarkMode ? '#fff' : '#000',
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#222" : "#f4f3f4"}
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  )
}

