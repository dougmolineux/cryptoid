import { UpdatePlayerAction } from "../types";

export enum PLAYER_ACTION_TYPES {
    UPDATE_USER = 'PLAYER/UPDATE_PLAYER'
}

export const updatePlayer = (money: number, portfolioValue: number): UpdatePlayerAction => ({
    type: PLAYER_ACTION_TYPES.UPDATE_USER,
    userData: {
        money,
        portfolioValue
    }
});