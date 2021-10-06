import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="app">
        <App />
     </div>
    );
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello World!</h1> 
        <div className="search"><Search /></div>
        <div className="list"><List /></div>
      </div>
    );
}
}

class Search extends React.Component {
  render() {
    return(
      <div>
        <input/>
        <button> Add Car </button>
      </div>
    );
  }

}

class List extends React.Component {
  render() {
    return(
      <div>
        <h3> Favorite Cars </h3>
        <ul>
          <li className="list-item"> Lexus IS250 </li>
          <li className="list-item"> Infiniti Q50 </li>
          <li className="list-item"> Maclaren </li>
        </ul>
      </div>
    );
  }
}

class ListItem extends React.Component {
  render() {
    return(
      <div>
        <h3> Favorite Cars </h3>
        <ul>
          <li className="list-item"> Lexus IS250 </li>
          <li className="list-item"> Infiniti Q50 </li>
          <li className="list-item"> Maclaren </li>
        </ul>
      </div>
    );
  }
}

//================================================================
ReactDOM.render(<Main />, document.getElementById('root'));
