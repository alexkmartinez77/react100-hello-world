import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="app">
       <div className="search">
         <input/>
         <button> Add Car </button>
       </div>
       <div className="list">
         <h3> Favorite Cars </h3>
         <ul>
           <li className="list-item"> Lexus IS250 </li>
           <li className="list-item"> Infiniti Q50 </li>
           <li className="list-item"> Maclaren </li>
         </ul>
       </div>
     </div>
    );
  }
}

class Header extends React.Component {
  render() {
    <div>
    <h1>Hello world!</h1>
    </div>
  }
}

class AddCar extends React.Component {
  render() {

  }

}

class FavoriteCars extends React.Component {
  render() {

  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
