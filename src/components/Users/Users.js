import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data => setUsers(data))

    },[])
    // console.log(users);
    const handleDelete = (id)=>{
        const url =  `http://localhost:5000/users/${id}`;
        fetch(url,{
            method:'DELETE',
        })
        .then((res)=>res.json())
        .then(data =>{
            if(data.deletedCount){
                const remainingUsers = users.filter(user => user._id !=id);
                setUsers(remainingUsers);
            }
        })

       
        
    }
    return (
        <div>
            <h2> Users {users.length}</h2>
            <ul>
               { users.map(user => <li>{user.name} : {user.email} <button onClick={()=>handleDelete(user._id)}>X</button>  <Link to={`/users/update/${user._id}`}><button>Update</button></Link> </li>)}
            </ul>
        </div>
    );
};

export default Users;