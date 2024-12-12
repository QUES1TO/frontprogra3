

import React,{useRef,useState,useEffect} from "react";
import GuardarProductoComponent from "../Components/GuardarProductoComponent";
import api from '../Http/api';

import { useNavigate, useLocation } from "react-router-dom"
const GuardarProductoComponentController = ({setAuthenticated}) => {
    const storageUrl =process.env.REACT_APP_BASE_URL + process.env.REACT_APP_STORAGE_URL 
    const navigate = useNavigate();
    const history = useLocation();
    const row = history.state;
    const [nombreValue,setNombreValue]= useState();
    const [previewImagenValue,setPreviewImagenValue]= useState();
    const [urlImagenValue,setUrlImagenValue]= useState(storageUrl.url_image);
    const [marcaValue,setMarcaValue] = useState();
    const [kilometrajeValue,setKilometrajeValue] = useState();
    const [añoValue,setAñoValue] = useState();
    const [combustibleValue,setCombustibleValue] = useState();
    const [transmisionValue,setTransmisionValue] = useState();
    const [motorValue,setMotorValue] = useState();
    const [colorValue,setColorValue] = useState();
    const [puertasValue,setPuertasValue] = useState();
    const [precioValue,setPrecioValue] = useState();

    const [CategoriaList,setCategoriaList] = useState([]);
    const [categoriaId, setCategoriaId] = useState();
    const [userId, setUserId] = useState();

    console.log(row);
    
    
    const handleNombreChange = (e) =>{
        console.log(e.target.value);
        setNombreValue(e.target.value);
    }
    const handleMarcaChange = (e) =>{
        console.log(e.target.value);
        setMarcaValue(e.target.value);
    }
    
    const handleKilometrajeChange = (e) =>{
        console.log(e.target.value);
        setKilometrajeValue(e.target.value);
    }
    const handleAñoChange = (e) =>{
        console.log(e.target.value);
        setAñoValue(e.target.value);
    }
    const handleCombustibleChange = (e) =>{
        console.log(e.target.value);
        setCombustibleValue(e.target.value);
    }
    const handleTransmisionChange = (e) =>{
        console.log(e.target.value);
        setTransmisionValue(e.target.value);
    }
    const handleMotorChange = (e) =>{
        console.log(e.target.value);
        setMotorValue(e.target.value);
    }
    const handleColorChange = (e) =>{
        console.log(e.target.value);
        setColorValue(e.target.value);
    }
    const handlePuertasChange = (e) =>{
        console.log(e.target.value);
        setPuertasValue(e.target.value);
    }
    const handlePrecioChange = (e) =>{
        console.log(e.target.value);
        setPrecioValue(e.target.value);
    }
   

    
    
    const handleChangeCategoria = (e) => {
        setCategoriaId(e.target.value);
      };
       
    const handleChangeUser = (e) => {
        setUserId(e.target.value);
      };
      

      const handleUrlImagenChange = (newValue) => {        
        //const objectUrl = URL.createObjectURL(newValue)
        const image = newValue.target.files[0];
        setPreviewImagenValue(image);
        setUrlImagenValue(image);
      }
    const handleSaveData = () => {
        const formData = new FormData();        
        formData.append('url_imagen',urlImagenValue);
        formData.append('nombre',nombreValue);
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
        // formData.append('_method', 'post');
        api.guardarproducto(formData)
            .then(response=>{
                return response.json();
            })
            .then(json=>{
                if(json.code=200)
                {
                    navigate("/home");
                }
            })
            .catch(response=>{
                console.log(response);
            });
    }
    useEffect( ()=>{
        api.productoo()
            .then(response =>{
                return response.json()
            }).then(json=>{
                const row = [];
                json.body.forEach(element => {
                    row.push(element);
                });
                setCategoriaId(row);
                setUserId(row);
            }).catch(response=>{
                console.log(response);
            });
            
      },[]); 

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
        handleUrlImagenChange={handleUrlImagenChange}
        handleChangeCategoria={handleChangeCategoria}
        handleChangeUser={handleChangeUser}
        handleSaveData={handleSaveData}
        />
    );
}
export default GuardarProductoComponentController;