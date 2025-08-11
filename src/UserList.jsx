import { useEffect, useState } from "react";
import "./App.css/"
import { useNavigate } from "react-router";

export default function UserList() {
  
  const [UserData,setUserData]=useState([])
  const [loading,setloading]= useState(false)
  const url = "http://localhost:3000/users";
  const navigate = useNavigate();

  useEffect(()=> {
    setloading(true)
    getUserData();
  },[])

  const getUserData = async () => {
    
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response)
    setloading(false)
  }

  const deleteUser = async (id) => {
    let response = await fetch(url+"/"+id,{
      method:"delete"
    })
    response = await response.json();
    if(response){
      alert("record deleted")
      getUserData();
    }
  } 

  const edituser = (id) =>{
    navigate("/edit/"+id)
  }

  return (
    <div>
      
      <ul className="user-list-header">
            <li>Name</li>
            <li>Age</li>
            <li>Email</li>
            <li>Action</li>
          </ul>
      {
        !loading?
        UserData.map((user)=>(
          <ul className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li><button onClick={()=> deleteUser(user.id)}>Delete</button>
                <button onClick={()=> edituser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
        :<h1>Data Loading.....</h1>
      }
    </div>
  )
}