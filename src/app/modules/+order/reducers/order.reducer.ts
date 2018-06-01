import {Actions, OrderActionTypes} from '../actions/order.action';

export interface State {
  availablePieces: number;
}

const initialState: State = {
  availablePieces: 0
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case OrderActionTypes.SET_AVAILABLE_PIECES:
      console.log('setter');
      return {...state, availablePieces: action.payload};
    default:
      return state;
  }
}

export const getAvailablePieces = (state: State) => state.availablePieces;
