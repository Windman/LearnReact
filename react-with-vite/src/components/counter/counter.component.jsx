export const Counter = ({ value, increment, decrement }) => {
    return (
      <div className="df pr6">
        <button onClick={decrement}>-</button>
        <div className="counter-value">{value}</div>
        <button onClick={increment}>+</button>
      </div>
    );
  };