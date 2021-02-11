import { UpdatePlayerAction, AppState, PlayerActions } from "../types";
import { PLAYER_ACTION_TYPES } from "./actions";

export const initialState: AppState = {
    player: { 
        money: 100, 
        portfolioValue: 0 
    }
};

const playerReducer = (
    state: AppState = initialState,
    action: PlayerActions
) => {
    switch (action.type){
        case PLAYER_ACTION_TYPES.UPDATE_USER:
            // pay attention to type-casting on action
            const { money, portfolioValue } = <UpdatePlayerAction>action;
            // return [...state, { money, portfolioValue }];
            return state;
            
            // define rest of actions here
        default:
            return state;
    }
}