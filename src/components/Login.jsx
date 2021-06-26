import React, { useState, useContext ,useEffect} from 'react'
import { AuthContext } from "../contexts/AuthContext";
function Login(props) {
    let { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoader] = useState(false);
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
                    <input type="email" value={email} onChange={
                        (e)=>{setEmail(e.target.value)}
                    } />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit"disabled={loading}>Login</button>
            </form>
        </div>
    )
}

export default Login