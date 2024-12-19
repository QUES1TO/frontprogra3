import React from "react";
import { FormControl, TextField, Button, Card, CardContent, AppBar, Toolbar, Box, Typography } from "@mui/material";
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const EditProductComponent = ({
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
  handleSaveData,
  handleUrlImagenChange,
  handleUrlImagen2Change,
  handleUrlImagen3Change,
  handleUrlImagen4Change,
}) => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', width: '100%', color: '#f0f0f0' }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: "transparent", boxShadow: "none", mb: 4 }}>
        <Toolbar>
          <Box component="img" src={logo} alt="Logo" sx={{ height: 70, width: 'auto', marginRight: -6 }} />
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 3 }}>
            {[
              { label: "Inicio", to: "/inicio" },
              { label: "Ver Autos", to: "/home2" },
            ].map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                sx={{
                  color: "#00aaff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": { color: "#ffaa00" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Product Form */}
      <Card sx={{ backgroundColor: '#333', borderRadius: 5, maxWidth: '800px', margin: '0 auto' }}>
        <CardContent>
          <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>Editar Producto</Typography>
          <form>
            <FormControl sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                placeholder="Introduzca el nombre del producto"
                onChange={handleNombreChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Marca"
                variant="outlined"
                fullWidth
                placeholder="Introduzca la marca"
                onChange={handleMarcaChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Kilometraje"
                variant="outlined"
                fullWidth
                placeholder="Introduzca el kilometraje"
                onChange={handleKilometrajeChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Año"
                variant="outlined"
                fullWidth
                placeholder="Introduzca el año"
                onChange={handleAñoChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Combustible"
                variant="outlined"
                fullWidth
                placeholder="Tipo de combustible"
                onChange={handleCombustibleChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Transmisión"
                variant="outlined"
                fullWidth
                placeholder="Tipo de transmisión"
                onChange={handleTransmisionChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Motor"
                variant="outlined"
                fullWidth
                placeholder="Tipo de motor"
                onChange={handleMotorChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Color"
                variant="outlined"
                fullWidth
                placeholder="Introduzca el color"
                onChange={handleColorChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Puertas"
                variant="outlined"
                fullWidth
                placeholder="Número de puertas"
                onChange={handlePuertasChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <TextField
                label="Precio"
                variant="outlined"
                fullWidth
                placeholder="Introduzca el precio"
                onChange={handlePrecioChange}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', '& input': { color: '#fff' } }}
              />
              <Typography variant="subtitle1" sx={{ color: '#fff', mt: 2 }}>Imagen Principal:</Typography>
              <TextField
                type="file"
                fullWidth
                onChange={handleUrlImagenChange}
                inputProps={{ accept: '.jpg, .png' }}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              />
              <Typography variant="subtitle1" sx={{ color: '#fff', mt: 2 }}>Imagen Secundaria 1:</Typography>
              <TextField
                type="file"
                fullWidth
                onChange={handleUrlImagen2Change}
                inputProps={{ accept: '.jpg, .png' }}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              />
              <Typography variant="subtitle1" sx={{ color: '#fff', mt: 2 }}>Imagen Secundaria 2:</Typography>
              <TextField
                type="file"
                fullWidth
                onChange={handleUrlImagen3Change}
                inputProps={{ accept: '.jpg, .png' }}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              />
              <Typography variant="subtitle1" sx={{ color: '#fff', mt: 2 }}>Imagen Secundaria 3:</Typography>
              <TextField
                type="file"
                fullWidth
                onChange={handleUrlImagen4Change}
                inputProps={{ accept: '.jpg, .png' }}
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#00aaff',
                  '&:hover': { backgroundColor: '#ffaa00' },
                  marginTop: 2,
                }}
                onClick={handleSaveData}
              >
                Guardar Producto
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductComponent;
