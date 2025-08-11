import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function UserEdit() {
    const { id } = useParams()

    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [email, setemail] = useState('')
    const url = "http://localhost:3000/users/" + id;
    const navigate = useNavigate('')


    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {

        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        setname(response.name)
        setage(response.age)
        setemail(response.email)

    }

    const updateUserData =async()=>{
        console.log(name,age,email);
        let response = await fetch(url,{
            method:'put',
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        console.log(response);
        if(response){
            alert("User Data Updated...")
            navigate('/')
        }
    } 

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Edit User details</h1>
            <input type="text" value={name} onChange={(event) => setname(event.target.value)} placeholder="User Name" />
            <br /><br />
            <input type="text" value={age} onChange={(event) => setage(event.target.value)} placeholder="User Age" />
            <br /><br />
            <input type="text" value={email} onChange={(event) => setemail(event.target.value)} placeholder="User Email" />
            <br /><br />
            <button onClick={updateUserData}>Update</button>
        </div>
    )
}