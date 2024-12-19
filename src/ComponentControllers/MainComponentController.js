import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent from "../Components/MainComponent";
import api from "../Http/api";
import auth from "../Auth/auth";

const MainComponentController = () => {
    const authenticationData = auth(); // Obtén los datos del usuario desde la autenticación
    const [userData, setUserData] = useState(authenticationData); // Establece el estado del usuario
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        // Obtener los productos
        api.productoData2()
            .then((response) => response.json())
            .then((json) => {
                setData(json.body); // Establece los productos
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Solo se ejecuta una vez al cargar el componente

    useEffect(() => {
        console.log("Cargando datos del usuario...");
        api.userData()
            .then((response) => response.json())
            .then((json) => {
                console.log("Respuesta de la API:", json); // Verifica la estructura de los datos
                if (json.body && json.body.length > 0) {
                    setUserData(json.body[0]); // Asume que json.body contiene un único usuario
                }
            })
            .catch((error) => {
                console.log("Error al obtener los datos del usuario:", error);
            });
    }, []);
    

    const handleEdit = (row) => {
        console.log("Estamos aquí");
        navigate("/edit/" + row.id, { state: row }); // Redirige a la página de edición
    };
    const handleDelete = (row) => {
        
        navigate("/delete/"+row.id, { state: row});
    }

    return (
        <>
            {userData && data.length > 0 ? (
                <MainComponent  handleDelete={handleDelete} data={data} handleEdit={handleEdit} userData={userData} />
            ) : (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(24, 21, 21, 0.91)', // Fondo oscuro
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <div className="loading-circle" style={{ color: '#f0f0f0' }}>
                        {/* Este es el círculo de carga */}
                        <div className="circle"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MainComponentController;
