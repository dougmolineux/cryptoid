export type Player = {
    money: number;
    portfolioValue: number;
}

export type UpdatePlayerAction = {
    type: string,
    userData: Player
}

// export type UpdateUserAction = {
//     type: string;
//     index: number;
//     userData: Player;
// }

// export type UserListAction = UpdatePlayer | UpdateUserAction;
export type PlayerActions = UpdatePlayerAction;

export type AppState = {
    player: Player
}

export type DispatchType = (args: PlayerActions) => PlayerActions