import { IncrementDayAction, UpdatePlayerAction } from "../types";

export enum PLAYER_ACTION_TYPES {
    UPDATE_USER = 'PLAYER/UPDATE_PLAYER',
    INCREMENT_DAY = 'INCREMENT_DAY'
}

export const updatePlayer = (money: number, portfolioValue: number): UpdatePlayerAction => ({
    type: PLAYER_ACTION_TYPES.UPDATE_USER,
    userData: {
        money,
        portfolioValue
    }
});

export const incrementDay = (day: number): IncrementDayAction => ({
    type: PLAYER_ACTION_TYPES.INCREMENT_DAY,
    dayValue: day 
});