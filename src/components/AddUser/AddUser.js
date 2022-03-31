import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const [user, setUser] = useState([]);
    const handleSubmit = (e)=>{
        const name =nameRef.current.value;
        const email =emailRef.current.value;
        const user = {name,email};
        // fetch('')
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data => console.log(data))
        nameRef.current.value = '';
        emailRef.current.value = '';
        e.target.reset();
        e.preventDefault();

    }
    return (
        <div>
            <h2>Please add an User</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' ref={nameRef} />
                <input type="text" placeholder='Email' ref={emailRef} />
            <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;