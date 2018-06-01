import {Actions, UserActionTypes} from '../actions/user.action';

export interface State {
  name: string;
}

export const initialState: State = {
  name: 'user'
};

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case UserActionTypes.SET_NAME:
      return {...state, name: action.payload};
    default:
      return state;
  }
}

export const getName = (state: State) => state.name;
