export type Player = {
    money: number;
    portfolioValue: number;
}

export type Stock = {
    name: string;
    price: number;
    owned: number;
    lastChanged: number;
}

export type UpdatePlayerAction = {
    type: string
    userData: Player
    stockIndex: number
    purchaseAmount: number
}

export type IncrementDayAction = {
    type: string
    dayValue: number
}

export type StateActions = UpdatePlayerAction | IncrementDayAction;

export type AppState = {
    day: number;
    player: Player;
    stocks: Stock[];
}

export type DispatchType = (args: StateActions) => StateActions;