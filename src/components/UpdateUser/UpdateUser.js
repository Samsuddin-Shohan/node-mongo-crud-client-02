import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState({});
    // console.log(id);
    useEffect(()=>{
        const url = `http://localhost:5000/update/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h2>Update User</h2>
            <h3>{user.name} : {user.email}</h3>

        </div>
    );
};

export default UpdateUser;