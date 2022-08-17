import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser(){
    
    const [users, setUsers] = useState([]);
    
    //get the data from the database
    useEffect(() => {
        getUsers();
    }, []); // Set default value to blank

    function getUsers(){
        axios.get('http://localhost/usertestapi/users/').then(function(response){
            console.log(response.data);
            setUsers(response.data)
        });
    }

    // Delete user
    const deleteUser = (id) => {
        axios.delete(`http://localhost/usertestapi/user/${id}/delete`).then(function(response){
            console.log(response.data)
            getUsers();
        })
    }
    
    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key)=>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "1rem"}}>Edit</Link>
                                <button onClick={() => deleteUser(`react-crud`.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}