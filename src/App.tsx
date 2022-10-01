import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const getFruits = async () => {
    const { data } = await axios("/fruits");
    console.log(data);
  };
  const postFruits = async () => {
    const { data } = await axios.post("/fruits", {
      data: inputValue,
    });
    console.log(data);
    setInputValue("");
  };

  return (
    <div className="App">
      <h1>Axios + Msw</h1>
      <div className="card">
        <button onClick={getFruits}>getFruits</button>
        <div>
          <input
            type="test"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={postFruits}>postFruits</button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
