import { combineReducers } from 'redux';
import { AppState } from './types';

export default store.create(
    combineReducers<AppState>(
        userList,   // this is the user-list reducer
        // other sub-states reducers go here
    )
)