import React from 'react';
import ReactDOM from 'react-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['Lexus IS250', 'Infiniti Q50', 'Maclaren']
    };
    /*this.addCar = this.addCar.bind(this);*/
  }

  addCar(incomingCar){
    const listCopy = this.state.list.slice();
    this.setState({
      list: listCopy.concat([incomingCar]),
    });
  }
  render() {
    return(
      <div className="app">
        <h1>Hello World!</h1> 
        <div className="search"><Search onClick={(i) => this.addCar(i)}/></div>
        <div className="list"><List list={this.state.list}/></div>
      </div>
    );
  }
}

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    };
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  render() {
    return(
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue}/>
        <button onClick={() => this.props.onClick(this.state.inputValue)}> Add Car </button>
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
      console.log(cars);
      
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
