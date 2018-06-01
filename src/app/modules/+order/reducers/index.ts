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

export const getOrderState = createFeatureSelector<orderReducer.State>(config.stores.order);
export const getOrderAvailablePieces = createSelector(getOrderState, orderReducer.getAvailablePieces);
