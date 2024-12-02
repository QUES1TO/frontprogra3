import './App.css';
import { useState ,useEffect} from 'react';
import FirstController from './ComponentControllers/FirstComponentController';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import LoginController from './ComponentControllers/LoginComponentController';
import MainComponentController from './ComponentControllers/MainComponentController';
import MainComponentController2 from './ComponentControllers/MainComponentController2';
import SideBarComponentController from "./ComponentControllers/SideBarComponentController";
import EditProductComponentController from "./ComponentControllers/EditProductComponentController";
import InicioComponentController from "./ComponentControllers/InicioComponentController";
import GuardarProductoComponentController from "./ComponentControllers/GuardarProductoComponentController";

import auth from "./Auth/auth";
const App = () => {
  const [authenticated,setAuthenticated] = useState(false);
  useEffect( ()=>{
    const authenticationData = auth();
    if(authenticationData!=null)
    {
      setAuthenticated(true);
    }
  },[]);

  const loginTarget = () => {
    var userAuthenticated = auth();
    var currentRoute = localStorage.getItem("current_route");
    return(userAuthenticated!=null? <Navigate to={currentRoute}/>:<LoginController setAuthenticated={setAuthenticated}/>);
  }
  const PrivateRoutes = () => {
    const isAuthenticated = auth();
    const { pathmane } = useLocation();
    useEffect(() => {
      if(auth()==null)
      {
        setAuthenticated(false);
      }
    },[pathmane]);
    return (
      isAuthenticated!=null ? <Outlet/> : <Navigate to= "/login" replace/>
    )
  }
  return (
    <>
    <Router>
      <div className="main-container">
        <SideBarComponentController authenticated={authenticated}/>
        <Routes>
        <Route path='/inicio' Component={InicioComponentController}/>
        <Route path='/home2' Component={MainComponentController2}/>
        <Route path='/guardar' Component={GuardarProductoComponentController}/>
          <Route path='/login' Component={loginTarget}/>   
          <Route element={<PrivateRoutes/>}>
            <Route path='/home' Component={MainComponentController}/>   
            
            <Route path='/edit/:id' Component={EditProductComponentController}/>
          </Route>             
        </Routes>
      </div>
    </Router>
       
    </>
  );
}

export default App;
