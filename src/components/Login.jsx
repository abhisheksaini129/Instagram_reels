import React, { useState, useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);
    let { login } = useContext(AuthContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // alert(email + password);
        try {
            // async 
            console.log("Logging in user")
            setLoader(true);
            await login(email, password)
            // console.log(res.user);
            setLoader(false);
            props.history.push("/");
        } catch (err) {
            setError(true);
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

export default Login