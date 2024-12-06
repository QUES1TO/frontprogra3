import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Box,
} from '@mui/material';

const MainComponent2 = ({ data, handleViewMore }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    marca: '',
    modelo: '',
    tipo: '',
    año: '',
    kilometraje: '',
    transmision: '',
    combustible: '',
    puertas: '',
  });

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredData = data.filter((product) =>
    Object.keys(filters).every((key) =>
      filters[key] ? product[key]?.toString().toLowerCase().includes(filters[key].toLowerCase()) : true
    )
  );

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', width: '100%', color: '#f0f0f0' }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2, // Espaciado entre botones
            }}
          >
            <Button component={Link} to="/inicio" sx={{ color: '#00aaff' }}>
              Inicio
            </Button>
            <Button component={Link} to="/home2" sx={{ color: '#00aaff' }}>
              Ver Autos
            </Button>
            <Button component={Link} to="/home" sx={{ color: '#00aaff' }}>
              Vender mi Auto
            </Button>
            <Button component={Link} to="/nosotros" sx={{ color: '#00aaff' }}>
              Nosotros
            </Button>
            <Button component={Link} to="/contacto" sx={{ color: '#00aaff' }}>
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Contenedor general */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#121212',
          borderRadius: 2,
          padding: 3,
          marginTop: 3,
          marginBottom: 5,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Buscador */}
        {/* Buscador */}
<Grid
  container
  spacing={2}
  sx={{
    marginBottom: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Fondo translúcido
    borderRadius: 2,
    padding: 2,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)', // Sombra suave
  }}
>
  {['marca', 'modelo', 'tipo', 'año', 'kilometraje', 'transmision', 'combustible', 'puertas'].map((field) => (
    <Grid item xs={12} sm={6} md={3} key={field}>
      <TextField
        label={field.charAt(0).toUpperCase() + field.slice(1)}
        name={field}
        value={filters[field]}
        onChange={handleInputChange}
        fullWidth
        variant="outlined"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)', // Fondo translúcido en el campo
          borderRadius: 2,
          '& .MuiOutlinedInput-root': {
            color: '#00aaff',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)', // Color del borde
            },
            '&:hover fieldset': {
              borderColor: '#dcdcdc', // Color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#dcdcdc', // Color del borde al enfocarse
            },
          },
          '& .MuiInputLabel-root': {
            color: '#00aaff',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#dcdcdc',
          },
        }}
      />
    </Grid>
  ))}
</Grid>


        {/* Productos */}
        <Grid container justifyContent="center" spacing={4}>
          {filteredData.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
                onClick={() => handleViewMore(product)}
              >
                <CardMedia
                  component="img"
                  image={`http://localhost:8000/storage/${product.url_imagen}`}
                  alt={product.nombre}
                  sx={{
                    width: '95%',
                    aspectRatio: '',
                    objectFit: 'cover',
                    borderRadius: 2,
                    marginBottom: '8px',
                  }}
                />
                <CardContent sx={{ textAlign: 'left', padding: '8px' }}>
                  <Typography variant="h6" sx={{ color: '#f0f0f0', fontSize: '1rem' }}>
                    {product.nombre}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#dcdcdc' }}>
                    ${product.precio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MainComponent2;
