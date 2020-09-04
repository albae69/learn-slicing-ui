import React from 'react';

import Store from './src/store';
import Routes from './src/routes/';

const App = () => {
  return (
    <Store>
      <Routes />
    </Store>
  );
};

export default App;
