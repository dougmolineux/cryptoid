import { AddUserAction, UserListAction, UserListState } from "../types";
import { USER_LIST_ACTION_TYPES } from "./actions";

export const initialState: UserListState = [];

const userList = (
    state: UserListState = initialState,
    action: UserListAction
) => {
    switch (action.type){
        case USER_LIST_ACTION_TYPES.ADD_USER:
            // pay attention to type-casting on action
            const { userData.money, userData.portfolioValue } = <AddUserAction>action;
            return [...state, { money, portfolioValue }];
            
            // define rest of actions here
        default:
            return state;
    }
}