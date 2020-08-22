import {LOGIN} from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default reducer;
