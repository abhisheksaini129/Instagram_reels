import React,{useContext, useEffect,useState} from 'react'
import{Switch,Route,Redirect,BrowserRouter as Router} from'react-router-dom';
import Signin from './Tcomp/Signin';
import Home from './Tcomp/Home';
import Signup from './Tcomp/Signup';
import { Auth,AuthWala } from './Auth';
import auth from './firebase';
// const signed=Math.random()<0.5?true:false;
function T1() {
    return (
        <>
        <AuthWala>

        <Router>
        <Switch>
            <Route path="/login" component={Signin}></Route>
            <Route path ="/signup" component={Signup}></Route>
            <PrivateRoute path ="/" comp={Home}></PrivateRoute>
        </Switch>

        </Router>
        
        </AuthWala>
        </>
    )
}
function PrivateRoute(pprops){
    let {currentUser}=useContext(Auth);
    console.log("int privateroute ",currentUser);
    const Component=pprops.comp;
    return(
        <Route {...pprops} render={
            (pprops) => {
        return currentUser!=null ?<Component {...pprops}></Component> : <Redirect to ="/login"></Redirect>

        }}></Route>
    )

}

export default T1;
