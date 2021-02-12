import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from "redux-thunk"

// import { store } from './state';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { playerReducer } from './state/player/reducers';

// import { updatePlayer } from './state/player/actions';
// import { DispatchType, Player, PlayerActions } from './state/types';
// import { AppState } from 'react-native';

// const store: Store<AppState, PlayerActions> & {
//   dispatch: DispatchType
// } = createStore(playerReducer, applyMiddleware(thunk));

// const store = createStore(playerReducer, applyMiddleware(thunk));

const store = createStore(playerReducer);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  console.log('store.getState', store.getState());
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
