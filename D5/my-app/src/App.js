import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
class App extends Component {
  constructor (props) {
    super(props)
    this.state = { toggle: true };
  }
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            This app is built with <br />React ⚛️ + Parcel 📦!
          </h1>
          <img
            src={logo}
            onClick={this.toggleToggle}
            className={'App-logo ' + (toggle && 'Logo-spin')}
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <A href="https://reactjs.org/">Learn React</A>
          <A href="https://parceljs.org/getting_started.html">Learn Parcel</A>
        </header>
      </div>
    );
  }
}

function A(props) {
  // you can use object spread because babel-preset-react-app is set up for you
  const { href, children, ...rest } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
export default App;
*/

fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let i = data;
    let thumb = i.drinks[0].strDrinkThumb;
    console.log(i);
    function drinkList() {
      return React.createElement(
        "ul",
        null,
        React.createElement("li", null, `Name: ${i.drinks[0].strDrink}`),
        React.createElement("li", null, `Drink ID: ${i.drinks[0].idDrink}`),
        React.createElement(
          "li",
          null,
          `It is ${i.drinks[0].strAlcoholic.toLowerCase()}.`
        ),
        React.createElement(
          "li",
          null,
          `It is a(n) ${i.drinks[0].strCategory.toLowerCase()}.`
        )
      );
    }
    document.getElementById("thumbnail").src = thumb;
    ReactDOM.render(
      React.createElement(drinkList, null, null),
      document.getElementById("react-container")
    );
  });
