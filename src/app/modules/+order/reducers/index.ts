import {createFeatureSelector, createSelector} from '@ngrx/store';
import {config} from '@config';

import * as rootReducer from '../../../store/reducers';
import * as orderReducer from './order.reducer';

export interface State extends rootReducer.State {
  order: orderReducer.State;
}

export const reducers = {
  order: orderReducer.reducer
};

export const getState = createFeatureSelector<State>(config.stores.order);
export const selectOrderState = createSelector(getState, (state: State) => state.order);
export const selectOrderAvailablePieces = createSelector(selectOrderState, orderReducer.getAvailablePieces);
