// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// import Colors from '../constants/Colors';
import { AppState, Player } from '../state/types';
// import { MonoText } from './StyledText';
import { Text, View } from './Themed';

type Props = {
  player: Player,
}

const mapStateToProps = (state: AppState) => {
  console.log('whats the state', state);
  return { player: state.player };
}

// export default function PlayerInfo({ path }: { path: string }) {
let PlayerInfo: React.FC<Props> = ({ player }) => {

  // export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const appState = React.useState<AppState | {}>();

  console.log('appState', appState);
  console.log('player', player);
  
  const portfolioValue = 0;
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.playerInfoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Player Money
          ${player.money}
        </Text>
        <Text
          style={styles.playerInfoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Portfolio Value
          ${portfolioValue}
        </Text>
        <TouchableOpacity style={styles.nextButtonContainer}>
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// export default PlayerInfo;

export default PlayerInfo = connect(
  mapStateToProps
)(PlayerInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  playerInfoText: {
    fontSize: 27,
    lineHeight: 50,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  nextButtonContainer: {
    elevation: 8,
    backgroundColor: "#7bfa61",
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
