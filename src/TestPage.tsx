import axios from "axios";
import { useState } from "react";
import "./App.css";

function TestPage() {
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

  const postLogin = async () => {
    const { data } = await axios.post("/login", {
      data: "test",
    });
    sessionStorage.setItem("token", "token");
    console.log(data);
  };

  const getAuth = async () => {
    const { data } = await axios("/auth");
    console.log(data);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={getFruits}>getFruits</button>
        <div style={{ display: "flex" }}>
          <input
            type="test"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={postFruits}>postFruits</button>
        </div>
        <button onClick={postLogin}>login</button>
        <button onClick={getAuth}>getAuth</button>
      </div>
    </div>
  );
}

export default TestPage;
