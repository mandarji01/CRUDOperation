import { useState } from "react"

export default function UserAdd() {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [email, setemail] = useState('')

    const createuser = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "Post",
            body: JSON.stringify({ name, age, email })
        });
        response = await response.json();
        if (response) {
            alert("New User Added")
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Add New User</h1>
            <input type="text" onChange={(event) => setname(event.target.value)} placeholder="Enter Your Name" />
            <br /><br />
            <input type="text" onChange={(event) => setage(event.target.value)} placeholder="Enter Your Age" />
            <br /><br />
            <input type="text" onChange={(event) => setemail(event.target.value)} placeholder="Enter Your Email" />
            <br /><br />
            <button onClick={createuser}>Add User</button>
        </div>
    )
}