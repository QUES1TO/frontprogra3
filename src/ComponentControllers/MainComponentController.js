import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent from "../Components/MainComponent";
import api from "../Http/api";
const createData = (id,nombre,email) => {
    return {id,nombre,email};
}
const MainComponentController = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect( ()=>{
        api.productoData2()
            .then(response =>{
                return response.json()
            }).then(json=>{
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                setData(row);
            }).catch(response=>{
                console.log(response);
            });
      },[]);    
    const handleEdit = (row) => {
        console.log("Estamos aqui");
        navigate("/edit/"+row.id, { state: row});
    }
    return (
        <>
        <MainComponent
        data={data}
        handleEdit={handleEdit}/>
        </>
    );
}
export default MainComponentController;