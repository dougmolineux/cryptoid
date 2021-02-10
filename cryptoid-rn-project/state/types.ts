export type Player = {
    money: string;
    portfolioValue: string;
}

export type UserListState = Player[];

export type AddUserAction = {
    type: string;
    userData: Player;
}
export type UpdateUserAction = {
    type: string;
    index: number;
    userData: Player;
}

export type UserListAction = AddUserAction | UpdateUserAction;

export type AppState = {
    userList: UserListState,
    // add future state slices here
}