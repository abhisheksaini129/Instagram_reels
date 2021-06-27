import React,{useState,useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
 function Feed() {

    const[loading,setLoading]=useState(false);
    const{signOut} = useContext(AuthContext);
    const handleLogout=async()=>{

    try{
        setLoading(true);
        await signOut();
        setLoading(false);
    }catch(err){
        console.log(err);
        setLoading(false);
    }
}
    return (
        <div>
            Feed
            <button onClick={handleLogout} disabled={loading}>Logout</button>
        </div>
    )
}
export default Feed
