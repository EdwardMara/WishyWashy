import isEmpty from '../utils/isEmpty';

import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isWorker: false,
  isManager: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        isWorker: action.payload.isWorker,
        isManager: action.payload.isManager,
        user: action.payload
      };
    default:
      return state;
  }
}
