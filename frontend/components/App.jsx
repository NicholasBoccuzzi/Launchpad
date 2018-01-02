import React from 'react';
import SessionFormContainer from './sessionFormContainer';

const App = () => (
  <div>
    <header>
      <h1>Launch Pad</h1>
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;