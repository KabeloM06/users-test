import { useState } from "react";
import axios from "axios";

export default function CreateUser(){

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
        
        axios.post('http://localhost:443/usertestapi/user/save', inputs)
        console.log(inputs);
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