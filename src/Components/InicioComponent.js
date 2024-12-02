import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container, AppBar, Toolbar, IconButton, Grid, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const InicioComponent = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#f0f0f0' }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#0d1b2a' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#f0f0f0' }}>
            Compra y Venta de Autos
          </Typography>
          <Button component={Link} to="/" sx={{ color: '#f0f0f0' }} className="mx-2">
            Inicio
          </Button>
          <Button component={Link} to="/autos" sx={{ color: '#f0f0f0' }} className="mx-2">
            Ver Autos
          </Button>
          <Button component={Link} to="/vender" sx={{ color: '#f0f0f0' }} className="mx-2">
            Vender mi Auto
          </Button>
          <Button component={Link} to="/nosotros" sx={{ color: '#f0f0f0' }} className="mx-2">
            Nosotros
          </Button>
          <Button component={Link} to="/contacto" sx={{ color: '#f0f0f0' }} className="mx-2">
            Contacto
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container maxWidth="xl" className="my-5">
        <Box my={4} className="text-center">
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#00aaff', fontWeight: 'bold' }}>
            Bienvenido a nuestra plataforma de Compra y Venta de Autos
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#dcdcdc', textAlign: 'justify' }}>
            Explora nuestra amplia variedad de autos para comprar o vender. Encuentra el vehículo perfecto para ti, ya sea nuevo o de segunda mano.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#005f73', color: '#fff', '&:hover': { backgroundColor: '#0077a0' } }}
            className="mt-3"
          >
            Ver Autos Disponibles
          </Button>
        </Box>

        {/* Sección destacada con tarjetas */}
        <Grid container spacing={6} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              className="shadow"
              sx={{
                backgroundColor: '#1b263b',
                color: '#f0f0f0',
                minHeight: '350px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ color: '#00aaff' }}>
                  Autos Nuevos
                </Typography>
                <Typography variant="body2" sx={{ color: '#dcdcdc' }}>
                  Descubre una amplia gama de autos nuevos a precios competitivos.
                </Typography>
                <Button
                  className="mt-2 btn"
                  sx={{ backgroundColor: '#0077a0', color: '#fff', '&:hover': { backgroundColor: '#00aaff' } }}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              className="shadow"
              sx={{
                backgroundColor: '#1b263b',
                color: '#f0f0f0',
                minHeight: '350px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ color: '#00aaff' }}>
                  Autos Usados
                </Typography>
                <Typography variant="body2" sx={{ color: '#dcdcdc' }}>
                  Encuentra autos usados en excelente estado y a precios accesibles.
                </Typography>
                <Button
                  className="mt-2 btn"
                  sx={{ backgroundColor: '#0077a0', color: '#fff', '&:hover': { backgroundColor: '#00aaff' } }}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              className="shadow"
              sx={{
                backgroundColor: '#1b263b',
                color: '#f0f0f0',
                minHeight: '350px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ color: '#00aaff' }}>
                  Financiación
                </Typography>
                <Typography variant="body2" sx={{ color: '#dcdcdc' }}>
                  Ofrecemos planes de financiamiento flexibles para tu comodidad.
                </Typography>
                <Button
                  className="mt-2 btn"
                  sx={{ backgroundColor: '#0077a0', color: '#fff', '&:hover': { backgroundColor: '#00aaff' } }}
                >
                  Ver más
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default InicioComponent;
