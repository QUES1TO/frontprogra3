import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent from "../Components/MainComponent";
import auth from "../Auth/auth";
import api from "../Http/api";
const MainPerfilComponentController = () => {
   
    const authenticationData = auth();
    const [userData,setUserData] = useState(authenticationData);
    
    useEffect( ()=>{
        api.userData()
            .then(response =>{
                return response.json()
            }).then(json=>{
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                setUserData(row);
            }).catch(response=>{
                console.log(response);
            });
      },[]);    
    
    return (
        <>
        <MainComponent
        userData={userData}/>
        </>
    );
}
export default MainPerfilComponentController;