import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindHotspots from './FindHotspots';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function Tabs(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Find" component={FindHotspots} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

