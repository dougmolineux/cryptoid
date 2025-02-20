import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import PlayerInfo from '../components/PlayerInfo';
import { Text, View  } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/cryptoid.png')} />
      {/* <Image
        source={{ uri: 'app_icon' }}
        style={{ width: 40, height: 40 }} /> */}
      {/* <Text style={styles.title}>Cryptoid</Text> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PlayerInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
