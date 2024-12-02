import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, CardContent, TextField, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MainComponent2 = ({ data }) => {
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

  const handleViewMore = (product) => {
    navigate(`/producto/${product.id}`, { state: { product } });
  };

  const filteredData = data.filter((product) =>
    Object.keys(filters).every((key) =>
      filters[key] ? product[key]?.toString().toLowerCase().includes(filters[key].toLowerCase()) : true
    )
  );

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#f0f0f0' }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#0d1b2a' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Compra y Venta de Autos
          </Typography>
          <Button component={Link} to="/" sx={{ color: '#f0f0f0' }}>Inicio</Button>
          <Button component={Link} to="/autos" sx={{ color: '#f0f0f0' }}>Ver Autos</Button>
          <Button component={Link} to="/vender" sx={{ color: '#f0f0f0' }}>Vender mi Auto</Button>
          <Button component={Link} to="/nosotros" sx={{ color: '#f0f0f0' }}>Nosotros</Button>
          <Button component={Link} to="/contacto" sx={{ color: '#f0f0f0' }}>Contacto</Button>
        </Toolbar>
      </AppBar>

      {/* Buscador */}
      <Container maxWidth="xl" sx={{ my: 3 }}>
        <Grid container spacing={2}>
          {['marca', 'modelo', 'tipo', 'año', 'kilometraje', 'transmision', 'combustible', 'puertas'].map((field) => (
            <Grid item xs={12} sm={6} md={3} key={field}>
              <TextField
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                value={filters[field]}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ my: 5 }}>
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
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: 4,
                    marginBottom: '8px',
                  }}
                />
                <CardContent sx={{ textAlign: 'center', padding: '8px' }}>
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
