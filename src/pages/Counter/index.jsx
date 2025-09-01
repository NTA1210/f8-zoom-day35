import { useState } from "react";
import clsx from "clsx";

import styles from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={clsx(styles.counter)}>
      <h1 className={clsx("title")}>Counter</h1>
      <h2
        className={clsx(styles.count)}
        style={{ color: count > 0 ? "green" : count < 0 ? "red" : "black" }}
      >
        {count}
      </h2>
      <div className="actions">
        <button
          onClick={() => setCount(count + 1)}
          className={clsx("btn increment")}
        >
          +
        </button>
        <button onClick={() => setCount(0)} className={clsx("btn reset")}>
          Reset
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className={clsx("btn decrement")}
        >
          -
        </button>
      </div>
      <div className={clsx("text")}>
        {count > 0 ? "Dương" : count < 0 ? "Âm" : "Bằng không"}
      </div>
    </div>
  );
}

export default Counter;
