// import react, {useEffect, useState} from "react";
// import './App.css';
// import auth from "./firebase";
// function App() {
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const[error,setError] = useState(false);
//   const[loader,setLoader] = useState(false);
//   const[user,setUser] = useState(null);
//   const [mainLoader, setMainLoader]=useState(true);

// //user -> user data
// //loading -> loading
// //error -> show

//   const handleSubmit= async()=>{
//     // alert(email+password);
//   try{
//     setLoader(true);
//     let res = await auth.signInWithEmailAndPassword(email,password);
//     // console.log(res.user);
//     setUser(res.user);
//     setLoader(false);
//   }catch(err){
//     setError(true);
//     setLoader(false);
//   }
//   setEmail("");
//   setPassword("");
//   }
//   const handleLogout=async()=>{
//     setLoader(true);
//     await auth.signOut();
//     setUser(null);
//     setLoader(false);
//   }
//   const handleEmailInput=(e)=>{
//     setEmail(e.target.value);
//   }
//   useEffect(()=>{
//     auth.onAuthStateChanged(user =>{
//       console.log(user);
//       setUser(user);
//       setMainLoader(false);
//     })
//   },[]);
//   const handleBack=()=>{
//     alert("go back hit");
//   }
//   return (
//    <>
//    {mainLoader==true?<h1>wait for a second</h1>:
//    error==true ?<> <h1>Failed to login</h1> 
//   <input type="submit" value="go back" onClick={handleBack}></input></>:
//    loader==true ? <h1> loading....</h1>:
//    user!=null ? <h1>user loggedIn{user.uid}</h1>:
//    <>
//    <h1>Firebase login</h1>
//    <input type="email" value={email} 
//    onChange={handleEmailInput}></input>
//    <div>
//    <input type="password" value={password} 
//    onChange={(e)=>{
//      setPassword(e.target.value)
//    }}
//    ></input></div>
//    <input type="button" value="submit" onClick={handleSubmit}></input>
//    </>
// }
// </>
//   );
// }

// export default App;
