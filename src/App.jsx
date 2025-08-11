import { NavLink, Route, Routes } from "react-router";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";


export default function App() {

  return (
    <div>
      <h1>Integrate JSON Server API and Loader</h1>
      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes>
    </div>
  )
}