import React, { useState, useEffect } from "react";

function Click() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>you clicked me {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}
export default Click;