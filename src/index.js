import React from 'react';
import ReactDOM from 'react-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Lexus IS250', 'Infiniti Q50', 'Maclaren'],
      input: '',
    };
  }

  updateInputValue(evt) {
    this.setState({
      input: evt.target.value,
    });
  }

  addCar(){
    if(this.state.input !== ''){
      const listCopy = this.state.list.slice();
      this.setState({
        list: listCopy.concat(this.state.input),
        input: '',
      });
    } else {
      return;
    }
  }

  render() {
    return(
      <div className="app">
        <h1>Hello World!</h1> 
        <div className="search"><Search initialInput={this.state.input} onClick={() => this.addCar()} updateInput={(e) => this.updateInputValue(e)}/></div>
        <div className="list"><List list={this.state.list}/></div>
      </div>
    );
  }
}

class Search extends React.Component {
  render() {
    return(
      <div>
        <input value={this.props.initialInput} onChange={this.props.updateInput}/>
        <button onClick={() => this.props.onClick()}> Add Car </button>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
      const carArray = this.props.list;
      const cars = carArray.map((car, i) => {
        return (
        <ListItem carName={car} key={i}/>
        )
      });

    return(
      <div>
        <h3> Favorite Cars </h3>
        <ul>
          {cars}
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
