import React, {Component} from 'react';
import Main from '../main';
import './index.css';

class App extends Component {
  render(){
     return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series AppList</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
