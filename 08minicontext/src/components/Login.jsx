import React,{useState,useContext} from 'react';
import UserContext from '../context/UserContext';

function Login(){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault()//bydefaultjab bhi ham submit krte hai to value url ke through kahi na kahi chali jati hai
        setUser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input 
            type='text'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'
            />
            <input 
            type='text'
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder='Password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;