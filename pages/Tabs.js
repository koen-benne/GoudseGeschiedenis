import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindHotspots from './FindHotspots';
import MyHotspots from './MyHotspots';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Tabs(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Find"
        component={FindHotspots}
        options={{
          tabBarIcon:({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon:({color, size}) => (
            <Ionicons name="settings" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="My Hotspots"
        component={MyHotspots}
        options={{
          tabBarIcon:({color, size}) => (
            <Ionicons name="ios-person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

