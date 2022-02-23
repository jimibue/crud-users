import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
import axios from "axios";

function App() {
  const [users, setUsers] = useState([])
  // const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const getUsers = () => {
    setLoading(true)
    setError(null)
    axios
      .get("https://reqres.in/api/users?delay=2")
      .then((res) => {
        console.log('res:', res)
        // the json we see in browser converted to js object
        console.log('res.data', res.data)
        console.log('res.data.data', res.data.data)
        setUsers(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
         setError('Some error occurred!!!!')
         setLoading(false)
      });
  };

  
  return (
    <div className="App">
      <h1>YOYO</h1>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      {/* <button onClick={getUsers}>get</button> */}
      <div>{JSON.stringify(users)}</div>
      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;
