import React,{useState,useEffect, useContext} from 'react'
import {Auth} from '../Auth';

function Signin(props) {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    // const[error,setError]=useState(false);
    const[loader,setLoader]=useState(false);
    let {login}=useContext(Auth);

    const handleSubmit =async (e)=>{
        e.preventDefault();

        try{
            setLoader(true);
            await login(email,password);
            setLoader(false);
            props.history.push("/");
        }
        catch(err){
            console.log(err);
            setLoader(false);
            setEmail("");
            setPassword("");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email}
                     onChange={(e)=>{setEmail(e.target.value)}} ></input>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <button type="submit"disabled={loader}>Login</button>
            </form>
        </div>
    )
}

export default Signin
