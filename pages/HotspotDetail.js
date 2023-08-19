import React from 'react';
import { View, Button } from 'react-native';

function HotspotDetail({ navigation }) {
  return (
    <View>
      {/* Your content for the detail screen */}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default HotspotDetail;

