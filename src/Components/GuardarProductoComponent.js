import React from "react";
import { FormControl, TextField, Button, Card, CardContent } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const GuardarProductComponent = ({
  handleNombreChange,
  handleMarcaChange,
  handleKilometrajeChange,
  handleAñoChange,
  handleCombustibleChange,
  handleTransmisionChange,
  handleMotorChange,
  handleColorChange,
  handlePuertasChange,
  handlePrecioChange,
  previewImagenValue,
  handleUrlImagenChange,
  handleChangeCategoria,
  handleSaveData
}) => {
  return (
    <div className="bodyproducto">
      <Card id="crearproducto">
        <CardContent>
          <h1 className="h1crear">Crear Producto</h1>
          <form>
            <FormControl className="Guardar-form-control">
              <TextField
                className="login-input"
                label="Nombre"
                variant="outlined"
                placeholder="Introduzca el nombre del producto"
                onChange={handleNombreChange}
              />
              <TextField
                className="login-input"
                label="Marca"
                variant="outlined"
                placeholder="Introduzca la marca"
                onChange={handleMarcaChange}
              />
              <TextField
                className="login-input"
                label="Kilometraje"
                variant="outlined"
                placeholder="Introduzca el kilometraje"
                onChange={handleKilometrajeChange}
              />
              <TextField
                className="login-input"
                label="Año"
                variant="outlined"
                placeholder="Introduzca el año"
                onChange={handleAñoChange}
              />
              <TextField
                className="login-input"
                label="Combustible"
                variant="outlined"
                placeholder="Introduzca el tipo de combustible"
                onChange={handleCombustibleChange}
              />
              <TextField
                className="login-input"
                label="Transmisión"
                variant="outlined"
                placeholder="Introduzca el tipo de transmisión"
                onChange={handleTransmisionChange}
              />
              <TextField
                className="login-input"
                label="Motor"
                variant="outlined"
                placeholder="Introduzca el tipo de motor"
                onChange={handleMotorChange}
              />
              <TextField
                className="login-input"
                label="Color"
                variant="outlined"
                placeholder="Introduzca el color"
                onChange={handleColorChange}
              />
              <TextField
                className="login-input"
                label="Puertas"
                variant="outlined"
                placeholder="Introduzca el número de puertas"
                onChange={handlePuertasChange}
              />
              <TextField
                className="login-input"
                label="Precio"
                variant="outlined"
                placeholder="Introduzca el precio"
                onChange={handlePrecioChange}
              />
              <TextField
                className="login-input"
                type="file"
                onChange={handleUrlImagenChange}
              />
              <TextField
                className="login-input"
                label="Categoría"
                variant="outlined"
                placeholder="Introduzca la categoría"
                onChange={handleChangeCategoria}
              />
              <Button onClick={handleSaveData} variant="outlined" startIcon={<PeopleAltIcon />}>
                Crear producto
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuardarProductComponent;
