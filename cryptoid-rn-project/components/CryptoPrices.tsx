// import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
import Slider from '@react-native-community/slider';
import { Text, View } from './Themed';
import { AppState, Player } from '../state/types';
import { connect } from 'react-redux';
import { updatePlayer } from '../state/player/actions';
import { Dispatch } from 'redux';

type Props = {
  player: Player,
  updatePlayerDispatch: (money: number, portfolioValue) => void;
}

// export default function EditScreenInfo({ path }: { path: string }) {
let EditScreenInfo: React.FC<Props> = ({ player, updatePlayerDispatch }) => {
  const stocks = [{
    name: 'RabbitCoin',
    price: 10
  },{
    name: 'MTC',
    price: 20
  },{
    name: 'Spyder',
    price: 60
  }];

  const buyStock = (stock, i) => {
    // TODO: buy the stock
    console.log("buying stock", stock);
    console.log("buying stock i ", i);
    // showSlider[i] = 'flex';
    // forceUpdate();
    setStockIndex(i);
  };

  const confirmBuyStock = () => {
    console.log("confirm buying stock");
    // showSlider[i] = 'flex';
    // forceUpdate();
    // setStockIndex(i);
  };

  const cancelBuyStock = () => {
    console.log("confirm buying stock");
    // showSlider[i] = 'flex';
    // forceUpdate();
    // setStockIndex(i);
    setStockIndex('list');
  };

  const [stockIndex, setStockIndex] = useState('list');

  // const [, forceUpdate] = useReducer(x => x + 1, 0);

  const showSlider = {};

  const stockOutput = stocks.map( (stock, i) => {
    return (
      <View style={styles.getStartedContainer}
        key={i}>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        {stock.name} - ${stock.price}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={styles.buyButtonContainer}
          onPress={ () => buyStock(stock, i) }>
          <Text style={styles.appButtonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellButtonContainer}>
          <Text style={styles.appButtonText}>Sell</Text>
        </TouchableOpacity>
      </View>
      <View style={{ display: showSlider[i] || 'none' }}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#ccfffa"
          maximumTrackTintColor="#ffeae6"
        />
      </View>
    </View>)
  });

  const stockList = (
    <View>
      {stockOutput}
    </View>
  );

  let output;

  if(stockIndex !== 'list') {
    output = (
    <View style={{ alignItems: 'center' }}>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">        
        {stocks[stockIndex].name}
      </Text>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">        
        Price per Crypto: ${stocks[stockIndex].price}
      </Text>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">        
        Available Cash: ${player.money}
      </Text>
      <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#ccfffa"
          maximumTrackTintColor="#ffeae6"
        />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={styles.buyButtonContainer}
          onPress={ () => confirmBuyStock() }>
          <Text style={styles.appButtonText}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.sellButtonContainer}
          onPress={ () => cancelBuyStock() }>
          <Text style={styles.appButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  } else {
    output = stockList;
  }  

  return output;

}

const mapStateToProps = (state: AppState) => {
  console.log('whats the state', state);
  return { player: state.player };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updatePlayerDispatch: (money: number, portfolioValio: number) => {
    console.log('is this triggering?', money);
    console.log('is this triggering?', portfolioValio);
    dispatch(updatePlayer(money, portfolioValio));
  },
});

export default EditScreenInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditScreenInfo);

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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  cryptoText: {
    fontSize: 27,
    lineHeight: 50,
    textAlign: 'center',
  },
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
