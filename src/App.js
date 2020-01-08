import React, { Component } from 'react';
import State from './state';
import Main from './Main/Main';



class App extends Component {
  state = {State}
  render(){
    return (
      <div className="App">
        <header className='header'>
          Noteful
        </header>

        <Main />
      </div>
    );
  }
}

export default App;
