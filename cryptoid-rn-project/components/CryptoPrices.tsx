// import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// import Colors from '../constants/Colors';
// import { MonoText } from './StyledText';
import Slider from '@react-native-community/slider';
import { Text, View } from './Themed';
import { AppState, Player, Stock } from '../state/types';
import { connect } from 'react-redux';
import { updatePlayer } from '../state/player/actions';
import { Dispatch } from 'redux';

type Props = {
  player: Player,
  stocks: Stock[],
  updatePlayerDispatch: (money: number, portfolioValue: number, stockIndex:number, purchaseAmount: number) => void;
}

let EditScreenInfo: React.FC<Props> = ({ player, stocks, updatePlayerDispatch }) => {

  const buyStock = (stock, i) => {
    setMode('buy');
    setStockIndex(i);
    setPurchaseAmount(0);
  };

  const sellStock = (stock, i) => {
    setMode('sell');
    setStockIndex(i);
    setPurchaseAmount(0);
  };

  const confirmBuyStock = (stock, stockIndex) => {
    console.log("confirm buying stock", stock);
    console.log("confirm buying stock purchase amount", purchaseAmount);
    let newPlayerMoney = player.money - purchaseAmount;
    let newPortfolioAmount = player.portfolioValue + purchaseAmount;
    let coinAmount = purchaseAmount / stock.price; 
    updatePlayerDispatch(newPlayerMoney, newPortfolioAmount, stockIndex, coinAmount);
    setStockIndex('list');
  };

  const confirmSellStock = (stock, stockIndex) => {
    let newPlayerMoney = player.money + purchaseAmount;
    let newPortfolioAmount = player.portfolioValue - purchaseAmount;
    let coinAmount = purchaseAmount / stock.price; 
    updatePlayerDispatch(newPlayerMoney, newPortfolioAmount, stockIndex, coinAmount*-1);
    setStockIndex('list');
  };

  const cancelBuyStock = () => {
    console.log("confirm buying stock");
    setStockIndex('list');
  };

  const [stockIndex, setStockIndex] = useState('list');
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [mode, setMode] = useState('none');

  const stockOutput = stocks.map( (stock, i) => {
    let lastChanged;
    if(stock.lastChanged) {
      lastChanged = (<Text style={{ flexDirection: 'row' }}> 
        <Text style={ 
          stock.lastChanged < 0 ? styles.downTriangle : styles.upTriangle 
        }></Text>
        <Text> {stock.lastChanged}%</Text>
      </Text>);
    }
    const buyButtonStyle = player.money > stock.price ? 
      styles.buyButtonContainer : styles.disabledBuyButtonContainer;
    const sellButtonStyle = stock.owned <= 0 ? 
      styles.disabledSellButtonContainer : styles.sellButtonContainer;
    return (
      <View style={styles.stockListContainer}
        key={i}>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        {stock.name} - ${stock.price} {lastChanged}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={ buyButtonStyle }
          disabled={ player.money < stock.price }
          onPress={ () => buyStock(stock, i) }>
          <Text style={styles.appButtonText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ sellButtonStyle }
          disabled={ stock.owned <= 0 }
          onPress={ () => sellStock(stock, i) }>
          <Text style={styles.appButtonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>)
  });

  const stockList = (
    <View>
      {stockOutput}
    </View>
  );

  let output;

  const sliderChanged = (val) => {
    val = Number(val.toFixed(2));
    setPurchaseAmount(val);
  }

  if(stockIndex !== 'list') {
    let maxSliderValue = player.money;
    if(mode === 'sell') {
      maxSliderValue = stocks[stockIndex].owned * stocks[stockIndex].price;
    }
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
        Available Cash: ${player.money.toFixed(2)}
      </Text>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">        
        Currently Owned: ${stocks[stockIndex].owned}
      </Text>
      <Text
        style={styles.cryptoText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">        
        Purchase Amount: ${purchaseAmount}
      </Text>
      <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={maxSliderValue}
          minimumTrackTintColor="#ccfffa"
          maximumTrackTintColor="#ffeae6"
          onValueChange={ (val) => sliderChanged(val)}
        />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={ styles.buyButtonContainer }
          onPress={ () => {
            if(mode === 'buy') {
              confirmBuyStock(stocks[stockIndex], stockIndex);
            } else {
              confirmSellStock(stocks[stockIndex], stockIndex);
            }
          }}>
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
  return { 
    player: state.player, 
    stocks: state.stocks 
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updatePlayerDispatch: (money: number, portfolioValio: number, stockIndex: number, purchaseAmount: number) => {
    dispatch(updatePlayer(money, portfolioValio, stockIndex, purchaseAmount));
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
  stockListContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  cryptoText: {
    fontSize: 14,
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
  disabledBuyButtonContainer: {
    elevation: 8,
    backgroundColor: "#99fff5",
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
  disabledSellButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffd5cc",
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
  },
  upTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftWidth: 6,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#009688',
    borderLeftColor: 'transparent',
  },
  downTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 12,
    borderRightWidth: 6,
    borderBottomWidth: 0,
    borderLeftWidth: 6,
    borderTopColor: '#FF9C87',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  }
});
