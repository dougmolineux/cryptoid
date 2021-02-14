import { UpdatePlayerAction, AppState, StateActions, IncrementDayAction } from "../types";
import { PLAYER_ACTION_TYPES } from "./actions";

export const initialState: AppState = {
    player: { 
        money: 150, 
        portfolioValue: 0 
    },
    day: 1
};

export const appStateReducer = (
    state: AppState = initialState,
    action: StateActions
) => {
    switch (action.type){
        case PLAYER_ACTION_TYPES.INCREMENT_DAY:
            const incrementDay = <IncrementDayAction>action;
            console.log('action in increment day', incrementDay);
            console.log('action in increment day', state);
            console.log('new state', { 
                ...state,     
                day: incrementDay.dayValue,
            });
            
            return { 
                ...state,     
                day: incrementDay.dayValue,
            };
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
            
        default:
            return state;
    }
}