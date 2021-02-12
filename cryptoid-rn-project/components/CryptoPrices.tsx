// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
import Slider from '@react-native-community/slider';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.cryptoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          RabbitCoin - $10
        </Text>
        {/* <TouchableOpacity onPress={onPress} style={styles.buyButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity> */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buyButtonContainer}>
            <Text style={styles.appButtonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sellButtonContainer}>
            <Text style={styles.appButtonText}>Sell</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: 'flex' }}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#ccfffa"
            maximumTrackTintColor="#ffeae6"
          />
        </View>
        <Text
          style={styles.cryptoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          MTC - $50
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buyButtonContainer}>
            <Text style={styles.appButtonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sellButtonContainer}>
            <Text style={styles.appButtonText}>Sell</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: 'flex' }}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#ccfffa"
            maximumTrackTintColor="#ffeae6"
          />
        </View>
        <Text
          style={styles.cryptoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Spider - $560
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.buyButtonContainer}>
            <Text style={styles.appButtonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sellButtonContainer}>
            <Text style={styles.appButtonText}>Sell</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: 'flex' }}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#ccfffa"
            maximumTrackTintColor="#ffeae6"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffedb3',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10,
  // },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },
  // codeHighlightContainer: {
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },
  cryptoText: {
    fontSize: 27,
    lineHeight: 50,
    textAlign: 'center',
  },
  // helpContainer: {
  //   marginTop: 15,
  //   marginHorizontal: 20,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   textAlign: 'center',
  // },
  buyButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  sellButtonContainer: {
    elevation: 8,
    backgroundColor: "#FF9C87",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
