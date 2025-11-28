import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Main from '../main';
import './index.css';

class App extends Component {
  render(){
     return (
      <div className="App">
        <header className="App-header">
          <Link to="/" className="logo-link">
            <h1 className="logo">
              <span className="logo-icon">📺</span>
              <span className="logo-text">TVMaze</span>
              <span className="logo-highlight">ShowList</span>
            </h1>
          </Link>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
