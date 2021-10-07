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
  constructor(props) {
    super(props);
    this.state = {
      list: ['Lexus IS250', 'Infiniti Q50', 'Maclaren']
    };

  }
  render() {
    return(
      <div>
        <h1>Hello World!</h1> 
        <div className="search"><Search /></div>
        <div className="list"><List list={this.state.list}/></div>
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

  
  renderListItem(i){
      return(
        <ListItem carName={this.props.list[i]}/>
      );
  }
  render() {
    return(
      <div>
        <h3> Favorite Cars </h3>
        <ul>
          {this.renderListItem(0)}
          {this.renderListItem(1)}
          {this.renderListItem(2)}
        </ul>
      </div>
    );
  }
}

class ListItem extends React.Component {
  render() {
    return(
      <li className="list-item"> {this.props.carName} </li>
    );
  }
}

//================================================================
ReactDOM.render(<Main />, document.getElementById('root'));
