import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export default function CreateUser(){

    const navigate = useNavigate();

    //maintain state of input boxes
    const [inputs, setInputs] =useState([]);

    const {id} = useParams();

        //get the data from the database
        useEffect(() => {
            getUser();
        }, []); // Set default value to blank
    
        function getUser(){
            axios.get(`http://localhost/usertestapi/user/${id}`).then(function(response){
                console.log(response.data);
                setInputs(response.data)
            });
        }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    
    const handleSubmit = (event) =>{
        //prevent auto refresh when submit button is pressed
        event.preventDefault();
        
        //actual put method for editing
        axios.put(`http://localhost/usertestapi/user/${id}/edit` , inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
   
    }

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing='10'>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                
                                <input value={inputs.name} type='text' name='name' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input value={inputs.email} type='email' name='email' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input value={inputs.mobile} type='text' name='mobile' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            
                            <td>
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                
                <br/>
                

                

            </form>
        </div>
        
    )
}