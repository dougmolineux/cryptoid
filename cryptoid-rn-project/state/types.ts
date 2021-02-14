export type Player = {
    money: number;
    portfolioValue: number;
}

export type UpdatePlayerAction = {
    type: string
    userData: Player
}

export type IncrementDayAction = {
    type: string
    dayValue: number
}

export type StateActions = UpdatePlayerAction | IncrementDayAction;

export type AppState = {
    day: number;
    player: Player;
}

export type DispatchType = (args: StateActions) => StateActions;