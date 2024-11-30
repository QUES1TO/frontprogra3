import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container, AppBar, Toolbar, IconButton, Grid, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const InicioComponent = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" className="bg-primary">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} className="text-white">
            Compra y Venta de Autos
          </Typography>
          <Button color="inherit" component={Link} to="/" className="text-white">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/autos" className="text-white">
            Ver Autos
          </Button>
          <Button color="inherit" component={Link} to="/vender" className="text-white">
            Vender mi Auto
          </Button>
          <Button color="inherit" component={Link} to="/nosotros" className="text-white">
            Nosotros
          </Button>
          <Button color="inherit" component={Link} to="/contacto" className="text-white">
            Contacto
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Container className="my-4">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom className="text-center">
            Bienvenido a nuestra plataforma de Compra y Venta de Autos
          </Typography>
          <Typography variant="body1" paragraph className="text-muted text-justify">
            Explora nuestra amplia variedad de autos para comprar o vender. Encuentra el vehículo perfecto para ti, ya sea nuevo o de segunda mano.
          </Typography>
          <div className="text-center">
            <Button variant="contained" color="primary" className="mt-3">
              Ver Autos Disponibles
            </Button>
          </div>
        </Box>

        {/* Sección destacada con tarjetas */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="shadow">
              <CardContent>
                <Typography variant="h5" component="h2" className="text-primary">
                  Autos Nuevos
                </Typography>
                <Typography variant="body2" className="text-muted">
                  Descubre una amplia gama de autos nuevos a precios competitivos.
                </Typography>
                <Button className="mt-2 btn btn-primary">Ver más</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="shadow">
              <CardContent>
                <Typography variant="h5" component="h2" className="text-primary">
                  Autos Usados
                </Typography>
                <Typography variant="body2" className="text-muted">
                  Encuentra autos usados en excelente estado y a precios accesibles.
                </Typography>
                <Button className="mt-2 btn btn-success">Ver más</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="shadow">
              <CardContent>
                <Typography variant="h5" component="h2" className="text-primary">
                  Financiación
                </Typography>
                <Typography variant="body2" className="text-muted">
                  Ofrecemos planes de financiamiento flexibles para tu comodidad.
                </Typography>
                <Button className="mt-2 btn btn-info">Ver más</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default InicioComponent;
