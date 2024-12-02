import React, { useState, useEffect } from "react";
import MainComponent2 from "../Components/MainComponent2";
import api from "../Http/api";
const MainComponentController2 = () => {
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
    return (
        <>
        <MainComponent2
        data={data}/>
        </>
    );
}
export default MainComponentController2;