import React, { useState } from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h1>Class: {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => (prev += 1));
  };
  const decrement = () => {
    setCount((prev) => (prev -= 1));
  };
  return (
    <>
      <div className="Counter">
        <h1>FN: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <CounterClass />
    </>
  );
};

export default Counter;
