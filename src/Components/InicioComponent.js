import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container, AppBar, Toolbar, Grid, Card, CardContent } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import fondo from '../img/fondo.png';
import ehh from '../img/eee.png';

const InicioComponent = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', width: '100%', color: '#f0f0f0' }}>
      {/* Navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#0a0a0a',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {/* Logo en la esquina izquierda */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              height: 70,
              width: 'auto',
              marginRight: -6,
            }}
          />

          {/* Menú de navegación */}
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

      {/* Título principal */}
      <Container maxWidth="lg"
        sx={{
          backgroundColor: '#121212',
          borderRadius: 2,
          padding: 3,
          marginTop: 3,
          marginBottom: 5,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
        }}>
      <Container  >
        <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '200px',
              }}
               >
         <Typography variant="h3" sx={{ color: '#dcdcdc', fontWeight: 'bold' }}>
           BIENVENIDO A AUTO MARKET
         </Typography>
         <Typography variant="h5" sx={{ color: '#dcdcdc', mt: 1 }}>
           PLATAFORMA DE COMPRA Y VENTA DE TODO TIPO DE AUTOS
         </Typography>
        </Box>
      </Container>


      <Container maxWidth="x1" sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 6 }}>
  {/* Imagen redondeada */}
        <Box
          component="img"
          src={fondo}
          alt="Fondo"
          sx={{
            width: '90%',
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          }}
        />
        {/* Texto de introducción */}
        <Box sx={{ ml: 20 }}>
          <Typography variant="h5" sx={{ color: '#f0f0f0', fontWeight: 'bold', mb: 2 }}>
            Empresa líder en la venta y compra de automóviles en toda América Latina.
          </Typography>
          <Typography variant="body1" sx={{ color: '#dcdcdc', textAlign: 'justify' }}>
            Reconocida como la opción número uno por su compromiso con la calidad, transparencia y satisfacción del cliente.
            Ofrecemos una experiencia excepcional en la adquisición y comercialización de vehículos, adaptándonos a las necesidades
            de nuestros clientes y estableciendo un estándar de confianza en el mercado automotriz de la región.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl" className="my-5">
  <Typography variant="h5" sx={{ color: '#dcdcdc', mt: 1, textAlign: 'center' }}>
    NUESTROS PRODUCTOS
  </Typography>
  <Grid container spacing={6} sx={{ marginTop: 4, justifyContent: 'center' }}>
    <Grid item xs={12} md={6} lg={4}>
      <Card
        className="shadow"
        sx={{
          backgroundColor: '#0a0a0a',
          color: '#f0f0f0',
          minHeight: '350px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="h2" sx={{ color: '#00aaff', mb: 2 }}>
            Autos Semi Nuevos
          </Typography>
          <Typography variant="body2" sx={{ color: '#dcdcdc', textAlign: 'center' }}>
            Descubre una amplia gama de autos semi nuevos a precios competitivos.
          </Typography>
        </CardContent>
        <Box
          component="img"
          src={ehh}
          alt="Fondo"
          sx={{
            width: '80%',
            alignSelf: 'center',
          }}
        />
      </Card>
    </Grid>

    <Grid item xs={12} md={6} lg={4}>
      <Card
        className="shadow"
        sx={{
          backgroundColor: '#0a0a0a',
          color: '#f0f0f0',
          minHeight: '350px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)',
          
        }}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="h2" sx={{ color: '#00aaff', mb: 2 }}>
            Autos Con Gran Recorrido
          </Typography>
          <Typography variant="body2" sx={{ color: '#dcdcdc', textAlign: 'center' }}>
            Ofrecemos planes de financiamiento flexibles para tu comodidad.
          </Typography>
        </CardContent>
        <Box
          component="img"
          src={ehh}
          alt="Fondo"
          sx={{
            width: '80%',
            alignSelf: 'center',
          }}
        />
      </Card>
    </Grid>
  </Grid>
</Container>

      </Container>
    </div>
  );
};

export default InicioComponent;
