import { combineReducers } from 'redux';
// import { AppState } from './types';

// export default store.create(
//     combineReducers<AppState>(
//         userList,   // this is the user-list reducer
//         // other sub-states reducers go here
//     )
// )

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducers'

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
})

export type RootState = ReturnType<typeof rootReducer>