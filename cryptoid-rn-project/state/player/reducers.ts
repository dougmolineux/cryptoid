import { UpdatePlayerAction, AppState, StateActions, IncrementDayAction } from "../types";
import { PLAYER_ACTION_TYPES } from "./actions";

export const initialState: AppState = {
    player: {
        money: 150,
        portfolioValue: 0
    },
    day: 1,
    stocks: [{
        name: 'RabbitCoin',
        price: 10,
        owned: 0,
        lastChanged: 0
    }, {
        name: 'MTC',
        price: 20,
        owned: 0,
        lastChanged: 0
    }, {
        name: 'Spyder',
        price: 60,
        owned: 0,
        lastChanged: 0
    }, {
        name: 'WeaselCoin',
        price: 23,
        owned: 0,
        lastChanged: 0
    }]
};

export const appStateReducer = (
    state: AppState = initialState,
    action: StateActions
) => {
    switch (action.type) {
        case PLAYER_ACTION_TYPES.INCREMENT_DAY:
            const incrementDay = <IncrementDayAction>action;
            
            let playerPortfolioValue = 0;
            const newStockArray = state.stocks.map( (stock) => {
                let upOrDown = randomInteger(1, 2);
                let percentChange = stock.price * (randomInteger(1, 20) / 100);
                stock.lastChanged = Number(percentChange.toFixed(2));
                if(upOrDown === 1) {
                    stock.price = Number((stock.price + percentChange).toFixed(2));
                } else {
                    stock.lastChanged = stock.lastChanged * -1;
                    stock.price = Number((stock.price - percentChange).toFixed(2));
                }
                playerPortfolioValue = playerPortfolioValue + (stock.price * stock.owned);
                playerPortfolioValue = Number(playerPortfolioValue.toFixed(2));
                return stock;
            });
            
            console.log('new state', {
                ...state,
                player: {
                    money: state.player.money,
                    portfolioValue: playerPortfolioValue
                },
                day: incrementDay.dayValue,
                stocks: newStockArray
            });

            return {
                ...state,
                player: {
                    money: state.player.money,
                    portfolioValue: playerPortfolioValue
                },
                day: incrementDay.dayValue,
                stocks: newStockArray
            };
        case PLAYER_ACTION_TYPES.UPDATE_USER:

            // pay attention to type-casting on action
            const updatePlayerAction = <UpdatePlayerAction>action;
            // return [...state, { money, portfolioValue }];
            // state.
            console.log("state", state);
            console.log("updatePlayerAction", updatePlayerAction);

            state.stocks[updatePlayerAction.stockIndex].owned = 
                state.stocks[updatePlayerAction.stockIndex].owned + updatePlayerAction.purchaseAmount;

            return {
                ...state,
                player: {
                    money: updatePlayerAction.userData.money,
                    portfolioValue: updatePlayerAction.userData.portfolioValue
                },
                stocks: state.stocks
            };

        default:
            return state;
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}