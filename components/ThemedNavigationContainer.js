import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Tabs from '../pages/Tabs';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { useDarkMode } from '../providers/DarkModeContext';
import HotspotDetail from '../pages/HotspotDetail';
import { createStackNavigator } from '@react-navigation/stack';

export default function ThemedNavigationContainer() {
  const { isDarkMode } = useDarkMode();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotspotDetail"
          component={HotspotDetail}
          options={{ title: 'Detail', tabBarVisible: false, gestureEnabled: true, animationEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

