import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
  };
  const subValue = () => {
    setCount(count - 1);
  };

  return (
    <>
    
      <div className="card">
        <button onClick={addValue}>Add by 1 = {count}</button>
      </div>
      <br />
      <div className="card">
        <button onClick={subValue}>Substract by 1 = {count}</button>
      </div>
    </>
  );
}

export default App;
