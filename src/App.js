import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'
import axios from "axios";
import User from "./User";

function App() {
  const [users, setUsers] = useState([])
  // const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const getUsers = () => {
    setLoading(true)
    setError(null)
    axios
      .get("https://reqres.in/api/users?delay=1")
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

  const deleteUser = (id)=>{
    console.log('in app js')
    console.log(id)
    // TODO: delete from DB
    // UPDATE UI
    let newUsers =users.filter(u=> u.id !==id)
    setUsers(newUsers)
}

  
  return (
    <div className="App">
      <h1>YOYO!</h1>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      {/* <button onClick={getUsers}>get</button> */}
      {/* <div>{users.map((u)=> <User email={u.email} first_name={u.first_name}/>)}</div> */}
      <div>{users.map((u)=> <User key={u.id} {...u} deleteUserYo={deleteUser}/>)}</div>
      <div>{JSON.stringify(users)}</div>

      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;
