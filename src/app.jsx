import React from 'react';
import { hot } from 'react-hot-loader';
import './app.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
