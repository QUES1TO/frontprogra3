import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EditProductComponent from "../Components/EditProductComponent";
import api from "../Http/api";

const EditProductComponentController = ({ setAuthenticated }) => {
  const storageUrl = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_STORAGE_URL;
  const navigate = useNavigate();
  const history = useLocation();
  const row = history.state;

  const [nombreValue, setNombreValue] = useState(row.nombre);
  const [previewImageValue, setPreviewImageValue] = useState(storageUrl + row.url_imagen);
  const [urlImagenValue, setUrlImagenValue] = useState(null);
  const [previewImage2Value, setPreviewImage2Value] = useState(storageUrl + row.url_imagen2);
  const [previewImage3Value, setPreviewImage3Value] = useState(storageUrl + row.url_imagen3);
  const [previewImage4Value, setPreviewImage4Value] = useState(storageUrl + row.url_imagen4);
  const [marcaValue, setMarcaValue] = useState(row.marca);
  const [kilometrajeValue, setKilometrajeValue] = useState(row.kilometraje);
  const [añoValue, setAñoValue] = useState(row.año);
  const [combustibleValue, setCombustibleValue] = useState(row.combustible);
  const [transmisionValue, setTransmisionValue] = useState(row.transmision);
  const [motorValue, setMotorValue] = useState(row.motor);
  const [colorValue, setColorValue] = useState(row.color);
  const [puertasValue, setPuertasValue] = useState(row.puertas);
  const [precioValue, setPrecioValue] = useState(row.precio);
  const [categoryList, setCategoryList] = useState([]);
  const [categoriaId, setCategoriaId] = useState(row.categoria_id);
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState(row.user_id);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleUrlImageChange = (newValue, setPreview, setImage) => {
    const objectUrl = URL.createObjectURL(newValue);
    setPreview(objectUrl);
    setImage(newValue);
  };

  const handleSaveData = () => {
    const formData = new FormData();
    formData.append("url_imagen", urlImagenValue);
    formData.append("url_imagen2", urlImagenValue);
    formData.append("url_imagen3", urlImagenValue);
    formData.append("url_imagen4", urlImagenValue);
    formData.append("nombre", nombreValue);
    formData.append("marca", marcaValue);
    formData.append("kilometraje", kilometrajeValue);
    formData.append("año", añoValue);
    formData.append("combustible", combustibleValue);
    formData.append("transmision", transmisionValue);
    formData.append("motor", motorValue);
    formData.append("color", colorValue);
    formData.append("puertas", puertasValue);
    formData.append("precio", precioValue);
    formData.append("categoria_id", categoriaId);
    formData.append("user_id", userId);
    formData.append("_method", "put");

    api
      .saveProductData(formData, row.id)
      .then((response) => response.json())
      .then((json) => {
        if (json.code === 200) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    api
      .CategoryData()
      .then((response) => response.json())
      .then((json) => {
        setCategoryList(json.body);
        setUserList(json.body);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <EditProductComponent
      nombreValue={nombreValue}
      handleNombreChange={handleInputChange(setNombreValue)}
      marcaValue={marcaValue}
      handleMarcaChange={handleInputChange(setMarcaValue)}
      kilometrajeValue={kilometrajeValue}
      handleKilometrajeChange={handleInputChange(setKilometrajeValue)}
      añoValue={añoValue}
      handleAñoChange={handleInputChange(setAñoValue)}
      combustibleValue={combustibleValue}
      handleCombustibleChange={handleInputChange(setCombustibleValue)}
      transmisionValue={transmisionValue}
      handleTransmisionChange={handleInputChange(setTransmisionValue)}
      motorValue={motorValue}
      handleMotorChange={handleInputChange(setMotorValue)}
      colorValue={colorValue}
      handleColorChange={handleInputChange(setColorValue)}
      puertasValue={puertasValue}
      handlePuertasChange={handleInputChange(setPuertasValue)}
      precioValue={precioValue}
      handlePrecioChange={handleInputChange(setPrecioValue)}
      previewImageValue={previewImageValue}
      previewImage2Value={previewImage2Value}
      previewImage3Value={previewImage3Value}
      previewImage4Value={previewImage4Value}
      handleUrlImageChange={(value) => handleUrlImageChange(value, setPreviewImageValue, setUrlImagenValue)}
      handleUrlImage2Change={(value) => handleUrlImageChange(value, setPreviewImage2Value, setUrlImagenValue)}
      handleUrlImage3Change={(value) => handleUrlImageChange(value, setPreviewImage3Value, setUrlImagenValue)}
      handleUrlImage4Change={(value) => handleUrlImageChange(value, setPreviewImage4Value, setUrlImagenValue)}
      categoryList={categoryList}
      CategoriaId={categoriaId}
      handleChangeCategoryId={handleInputChange(setCategoriaId)}
      userList={userList}
      UserId={userId}
      handleChangeUserId={handleInputChange(setUserId)}
      handleSaveData={handleSaveData}
    />
  );
};

export default EditProductComponentController;
