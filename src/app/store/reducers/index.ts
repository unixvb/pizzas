import {ActionReducer, createSelector, MetaReducer} from '@ngrx/store';
import {config} from '@config';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import {storeFreeze} from 'ngrx-store-freeze';

import {environment} from '../../../environments/environment';

import * as userReducer from './user.reducer';

export interface State {
  user: userReducer.State;
}

const initialState: State = {
  user: userReducer.initialState
};

export const reducers = {
  user: userReducer.reducer
};

export function saveLocalStorage(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    if (action.type === '@ngrx/store/init') {
      const objectState = JSON.parse(localStorage.getItem(config.stores.main)) || initialState;

      if (typeof objectState === 'object' && objectState !== null && Object.keys(objectState).length > 0) {
        state = objectState;
      }

      return reducer(state, action);
    } else {
      const _state = reducer(state, action);
      localStorage.setItem(config.stores.main, JSON.stringify(_state));
      return _state;
    }
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [saveLocalStorage, storeFreeze] // dev
  : [saveLocalStorage]; // prod

const selectUserState = (state: State) => state.user;
export const selectUserName = createSelector(selectUserState, userReducer.getName);
