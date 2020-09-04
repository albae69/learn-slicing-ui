import React, {createContext, useReducer} from 'react';

import reducer from './reducer';
import {initialState} from './state';

export const State = createContext();
export const Dispatch = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};
