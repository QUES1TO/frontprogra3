import React, { useState, useEffect } from "react";
import MainComponent2 from "../Components/ViewProductComponent";
import { useNavigate, useParams } from "react-router-dom"; // useParams para obtener el ID del producto
import api from "../Http/api";

const ViewProductComponentController = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [userData,coData] = useState([]);
    useEffect(() => {
        api.productoData2()  // Traemos todos los productos
            .then(response => response.json())
            .then(json => {
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });

                // Filtramos los productos por el ID
                const filteredProduct = row.filter(product => product.id.toString() === id);
                setData(filteredProduct); // Solo el producto seleccionado
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]); 
    // Dependencia para actualizar cuando cambie el ID
    useEffect( ()=>{
        api.comentario()
            .then(response =>{
                return response.json()
            }).then(json=>{
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                coData(row);
            }).catch(response=>{
                console.log(response);
            });
      },[]);    

    return (
        <MainComponent2 data={data}
        userData={userData}
          />
    );
};

export default ViewProductComponentController;
