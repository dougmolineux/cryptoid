import { UpdatePlayerAction, AppState, PlayerActions } from "../types";
import { PLAYER_ACTION_TYPES } from "./actions";

export const initialState: AppState = {
    player: { 
        money: 150, 
        portfolioValue: 0 
    }
};

export const playerReducer = (
    state: AppState = initialState,
    action: PlayerActions
) => {
    switch (action.type){
        case PLAYER_ACTION_TYPES.UPDATE_USER:
            // pay attention to type-casting on action
            const updatePlayerAction = <UpdatePlayerAction>action;
            // return [...state, { money, portfolioValue }];
            // state.
            console.log("state", state);
            console.log("updatePlayerAction", updatePlayerAction);
            
            return { 
                ...state,     
            };
            
            // define rest of actions here
        default:
            return state;
    }
}