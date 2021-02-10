import { AddUserAction } from "../types";

export enum USER_LIST_ACTION_TYPES {
    ADD_USER = 'USER_LIST/ADD_USER',
    REMOVE_USER = 'USER_LIST/REMOVE_USER',
    UPDATE_USER = 'USER_LIST/UPDATE_USER'
}

export const addUser = (money: number, portfolioValue: number): AddUserAction => ({
    type: USER_LIST_ACTION_TYPES.ADD_USER,
    userData: {
        money,
        portfolioValue
    }
});