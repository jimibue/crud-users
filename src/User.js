import { useState } from "react";
import EditUser from "./EditUser";

const User = (props) => {
  const [showForm, setShowForm] = useState(false);
  console.log("props:", props);
  const renderUser = () => {
    return (
      <>
        <h1>
          {props.first_name} {props.last_name}
        </h1>
        <p>email: {props.email}</p>
        <p>id: {props.id}</p>
        <p>avatar: {props.avatar}</p>
        <button onClick={() => props.deleteUserYo(props.id)}>delete</button>
    </>
      
    );
  };

  return (
    <div style={{ border: "3px solid blue", margin: "20px" }}>
        <button onClick={()=>setShowForm(!showForm)}>{showForm ? 'cancel' : 'edit'}</button>
        {showForm ? <EditUser {...props}  /> : renderUser()}
      
    </div>
  );
};
export default User;
