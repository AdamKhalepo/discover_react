import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isVisible, setVisibility] =  useState(false);

  return (
      <div>
        <button onClick={() => setVisibility(!isVisible)}>{isVisible ? 'Hide counter' : "Show counter"}</button>
        {isVisible && <br/>}
        {isVisible && <button onClick={() => setCount(count + 1)}>You clicked me a total of {count} times</button>}
      </div>
  );
}