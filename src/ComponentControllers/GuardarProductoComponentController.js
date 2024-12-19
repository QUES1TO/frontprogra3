import React, { useState, useEffect } from "react";
import GuardarProductoComponent from "../Components/GuardarProductoComponent";
import api from '../Http/api';
import { useNavigate, useLocation } from "react-router-dom";

const GuardarProductoComponentController = ({ setAuthenticated }) => {
    const storageUrl = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_STORAGE_URL;
    const navigate = useNavigate();
    const history = useLocation();
    const row = history.state;

    // Estado para los valores de las imágenes
    const [previewImagenValue, setPreviewImagenValue] = useState();
    const [previewImagen2Value, setPreviewImagen2Value] = useState();
    const [previewImagen3Value, setPreviewImagen3Value] = useState();
    const [previewImagen4Value, setPreviewImagen4Value] = useState();

    const [urlImagenValue, setUrlImagenValue] = useState(null);
    const [urlImagen2Value, setUrlImagen2Value] = useState(null);
    const [urlImagen3Value, setUrlImagen3Value] = useState(null);
    const [urlImagen4Value, setUrlImagen4Value] = useState(null);

    const [nombreValue, setNombreValue] = useState("");
    const [marcaValue, setMarcaValue] = useState("");
    const [kilometrajeValue, setKilometrajeValue] = useState("");
    const [añoValue, setAñoValue] = useState("");
    const [combustibleValue, setCombustibleValue] = useState("");
    const [transmisionValue, setTransmisionValue] = useState("");
    const [motorValue, setMotorValue] = useState("");
    const [colorValue, setColorValue] = useState("");
    const [puertasValue, setPuertasValue] = useState("");
    const [precioValue, setPrecioValue] = useState("");

    const [CategoriaList, setCategoriaList] = useState([]);
    const [categoriaId, setCategoriaId] = useState();
    const [userId, setUserId] = useState();

    console.log(row);

    const handleNombreChange = (e) => setNombreValue(e.target.value);
    const handleMarcaChange = (e) => setMarcaValue(e.target.value);
    const handleKilometrajeChange = (e) => setKilometrajeValue(e.target.value);
    const handleAñoChange = (e) => setAñoValue(e.target.value);
    const handleCombustibleChange = (e) => setCombustibleValue(e.target.value);
    const handleTransmisionChange = (e) => setTransmisionValue(e.target.value);
    const handleMotorChange = (e) => setMotorValue(e.target.value);
    const handleColorChange = (e) => setColorValue(e.target.value);
    const handlePuertasChange = (e) => setPuertasValue(e.target.value);
    const handlePrecioChange = (e) => setPrecioValue(e.target.value);

    const handleChangeCategoria = (e) => setCategoriaId(e.target.value);
    const handleChangeUser = (e) => setUserId(e.target.value);

    const handleUrlImagenChange = (e) => {
        const image = e.target.files[0];
        setPreviewImagenValue(URL.createObjectURL(image)); // Para vista previa
        setUrlImagenValue(image); // Para enviar en el FormData
    };

    const handleUrlImagen2Change = (e) => {
        const image2 = e.target.files[0];
        setPreviewImagen2Value(URL.createObjectURL(image2)); // Vista previa
        setUrlImagen2Value(image2); // Para enviar en el FormData
    };

    const handleUrlImagen3Change = (e) => {
        const image3 = e.target.files[0];
        setPreviewImagen3Value(URL.createObjectURL(image3)); // Vista previa
        setUrlImagen3Value(image3); // Para enviar en el FormData
    };

    const handleUrlImagen4Change = (e) => {
        const image4 = e.target.files[0];
        setPreviewImagen4Value(URL.createObjectURL(image4)); // Vista previa
        setUrlImagen4Value(image4); // Para enviar en el FormData
    };

    const handleSaveData = () => {
        const formData = new FormData();
        formData.append('url_imagen', urlImagenValue);
        formData.append('url_imagen2', urlImagen2Value);
        formData.append('url_imagen3', urlImagen3Value);
        formData.append('url_imagen4', urlImagen4Value);
        formData.append('nombre', nombreValue);
        formData.append('marca', marcaValue);
        formData.append('kilometraje', kilometrajeValue);
        formData.append('año', añoValue);
        formData.append('combustible', combustibleValue);
        formData.append('transmision', transmisionValue);
        formData.append('motor', motorValue);
        formData.append('color', colorValue);
        formData.append('puertas', puertasValue);
        formData.append('precio', precioValue);
        formData.append('categoria_id', categoriaId);
        formData.append('user_id', userId);

        api.guardarproducto(formData)
            .then(response => response.json())
            .then(json => {
                if (json.code === 200) {
                    alert('Producto guardado con éxito');
               
                    navigate("/home2");
                }
            })
            .catch(response => {
                console.log(response);
            });
    };

    useEffect(() => {
        api.productoo()
            .then(response => response.json())
            .then(json => {
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                setCategoriaId(row);
                setUserId(row);
            })
            .catch(response => {
                console.log(response);
            });
    }, []);

    return (
        <GuardarProductoComponent
            handleNombreChange={handleNombreChange}
            handleMarcaChange={handleMarcaChange}
            handleKilometrajeChange={handleKilometrajeChange}
            handleAñoChange={handleAñoChange}
            handleCombustibleChange={handleCombustibleChange}
            handleTransmisionChange={handleTransmisionChange}
            handleMotorChange={handleMotorChange}
            handleColorChange={handleColorChange}
            handlePuertasChange={handlePuertasChange}
            handlePrecioChange={handlePrecioChange}
            previewImagenValue={previewImagenValue}
            previewImagen2Value={previewImagen2Value}
            previewImagen3Value={previewImagen3Value}
            previewImagen4Value={previewImagen4Value}
            handleUrlImagenChange={handleUrlImagenChange}
            handleUrlImagen2Change={handleUrlImagen2Change}
            handleUrlImagen3Change={handleUrlImagen3Change}
            handleUrlImagen4Change={handleUrlImagen4Change}
            handleChangeCategoria={handleChangeCategoria}
            handleChangeUser={handleChangeUser}
            handleSaveData={handleSaveData}
        />
    );
};

export default GuardarProductoComponentController;   