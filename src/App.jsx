import React, { useState, Component } from "react";

function App() {
  const message = "Welcome to React!";
  const fruits = ["Apple", "Banana", "Cherry"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const isMorning = new Date().getHours() < 12;

  const [randomNumber, setRandomNumber] = useState(null);
  const [year, setYear] = useState(2024);
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const reversedText = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversedText.toLowerCase();

  return (
    <div style={{ padding: "10px", fontFamily: "Arial" }}>
      <h1>Hello, React!</h1>
      <h2>{message}</h2>

      <h3>Fruits List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <p style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        This is a styled message!
      </p>

      <p>Sum of squares: {3 ** 2 + 4 ** 2}</p>
      <h3>{isMorning ? "Good Morning" : "Good Evening"}</h3>
      <p>Today is {days[today]}.</p>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Prime Number Checker</h1>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter a number"
        />
        {num && (
          <p>
            {num} is {isPrime(parseInt(num)) ? "a prime number" : "not a prime number"}.
          </p>
        )}

        <hr />

        <h1>Reverse String & Palindrome Checker</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a string"
        />
        {text && (
          <>
            <p>Reversed: {reversedText}</p>
            <p>{isPalindrome ? "It is a palindrome" : "It is not a palindrome"}.</p>
          </>
        )}
      </div>

      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate Number
      </button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}

      <p>{year} is {isLeapYear ? "a Leap Year" : "not a Leap Year"}.</p>

      <UserGreeting firstName="Shiva" lastName="Chikkala" />
      <TemperatureConverter />
    </div>
  );
}

// Class Component - Temperature Converter
class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = { celsius: "", fahrenheit: "" };
  }

  convertToFahrenheit = (e) => {
    const celsius = e.target.value;
    this.setState({
      celsius,
      fahrenheit: (celsius * 9 / 5 + 32).toFixed(2),
    });
  };

  convertToCelsius = (e) => {
    const fahrenheit = e.target.value;
    this.setState({
      fahrenheit,
      celsius: ((fahrenheit - 32) * 5 / 9).toFixed(2),
    });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Celsius"
          value={this.state.celsius}
          onChange={this.convertToFahrenheit}
        />
        <p>Celsius: {this.state.celsius}</p>
        <input
          type="number"
          placeholder="Fahrenheit"
          value={this.state.fahrenheit}
          onChange={this.convertToCelsius}
        />
        <p>Fahrenheit: {this.state.fahrenheit}</p>
      </div>
    );
  }
}

// Class Component - User Greeting
class UserGreeting extends Component {
  render() {
    return <h1>Hello, {this.props.firstName} {this.props.lastName}!</h1>;
  }
}

export default App;
