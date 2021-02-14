import React from 'react';
import { DrawerLayoutAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { incrementDay } from '../state/player/actions';
import { AppState, Player } from '../state/types';
import { Text, View } from './Themed';

type Props = {
  // state: AppState
  player: Player,
  day: number,
  incrementDayDispatch: (day: number) => void;
}

// export default function PlayerInfo({ path }: { path: string }) {
let PlayerInfo: React.FC<Props> = ({ player, day, incrementDayDispatch }) => {
  

  // export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  // const appState = React.useState<AppState | {}>();
  // console.log('appState', appState);

  // console.log('player', player);
  // player = player.player;

  // const { day } = day;
  //console.log('day', day);
  // let day = 1;
  // let player = {
  //   money: 10,
  //   portfolioValue: 20
  // }
  
  // const { player, day } = state;
  // console.log('store.getState', store.getState());
  console.log('player', player);
  console.log('day', day);

  const nextButtonPressed = () => {
    day++;
    console.log('next day', day);
    incrementDayDispatch(day);
  };
  
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
          ${player.portfolioValue}
        </Text>
        <Text
          style={styles.playerInfoText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Day {day}
        </Text>
        <TouchableOpacity 
          style={styles.nextButtonContainer}
          onPress={nextButtonPressed}>
          <Text style={styles.appButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDipatchToProps = (dispatch: Dispatch) => ({
  incrementDayDispatch: (day: number) => {
    console.log('is this triggering?', day);
    dispatch(incrementDay(day));
  },
});

const mapStateToProps = (state: AppState) => {
  console.log('whats the state', state);
  return {
    player: state.player,
    day: state.day
  };
}

export default PlayerInfo = connect(
  mapStateToProps,
  mapDipatchToProps
)(PlayerInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
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
