import axios from 'axios';
import './App.css'

function App() {
  const callApiTest = async () => {
    const { data } = await axios('/fruits');
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Axios + Msw</h1>
      <div className="card">
        <button onClick={callApiTest}>fruit API 호출</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
