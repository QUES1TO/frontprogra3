import React, { useState, useEffect } from "react";
import MainComponent2 from "../Components/MainComponent2";
import { useNavigate } from "react-router-dom";
import api from "../Http/api";
const MainComponentController2 = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect( ()=>{
        api.productoData(1)
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
      const handleViewMore = (row) => {
        console.log("Estamos aqui");
        navigate("/producto/"+row.id, { state: row});
    }
    return (
        <>
        <MainComponent2
        data={data}
        handleViewMore={handleViewMore}/>
        </>
    );
}
export default MainComponentController2;