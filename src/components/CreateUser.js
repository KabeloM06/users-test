import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function CreateUser(){

    const navigate = useNavigate();

    //maintain state of input boxes
    const [inputs, setInputs] =useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    //prevent auto refresh when submit button is pressed
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        axios.post('http://localhost/usertestapi/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
   
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing='10'>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type='text' name='name' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type='email' name='email' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type='text' name='mobile' onChange={handleChange}/>
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