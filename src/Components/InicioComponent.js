import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Paper, Container, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const InicioComponent = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Compra y Venta de Autos
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/autos">
            Ver Autos
          </Button>
          <Button color="inherit" component={Link} to="/vender">
            Vender mi Auto
          </Button>
          <Button color="inherit" component={Link} to="/nosotros">
            Nosotros
          </Button>
          <Button color="inherit" component={Link} to="/contacto">
            Contacto
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bienvenido a nuestra plataforma de Compra y Venta de Autos
          </Typography>
          <Typography variant="body1" paragraph>
            Explora nuestra amplia variedad de autos para comprar o vender. Encuentra el vehículo perfecto para ti, ya sea nuevo o de segunda mano.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default InicioComponent;
