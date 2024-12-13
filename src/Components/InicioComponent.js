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

          {/* Navbar */}
          <AppBar
  position="sticky"
  sx={{
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Fondo semitransparente
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
    mb: 4,
    backdropFilter: "blur(10px)", // Efecto de desenfoque para elegancia
    borderBottom: "1px solid #c0c0c0", // Borde plateado más delgado
  }}
>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    {/* Logo */}
    
    <Box
      component="img"
      src={logo}
      alt="Logo"
      
      sx={{
        height: 80, // Tamaño del logo aumentado
        width: "auto",
        marginLeft: 2,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.1)", // Zoom al pasar el mouse
        },
      }}
    />

    {/* Menú */}
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      {[
        { label: "Inicio", to: "/inicio" },
        { label: "Ver Autos", to: "/home2" },
        { label: "Vender mi Auto", to: "/home" },
        { label: "Nosotros", to: "/nosotros" },
        { label: "Contacto", to: "/contacto" },
      ].map((item) => (
        <Button
          key={item.label}
          component={Link}
          to={item.to}
          sx={{
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            position: "relative",
            transition: "color 0.3s ease",
            "&:after": {
              content: '""',
              position: "absolute",
              width: "0%",
              height: "2px",
              bottom: 0,
              left: 0,
              backgroundColor: "#ffaa00",
              transition: "width 0.3s ease",
            },
            "&:hover": {
              color: "#ffaa00",
              "&:after": {
                width: "100%", // Línea animada al pasar el mouse
              },
            },
          }}
        >
          {item.label}
        </Button>
      ))}
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
     <Container sx={{ maxWidth: 'lg', padding: 5, backgroundColor: '#121212', borderRadius: 3, boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)' }}>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '300px',
          padding: '30px',
          borderRadius: 3,
          background: '',
          boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.8)',
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#ffffff',
            fontWeight: '700',
            letterSpacing: '2px',
            fontFamily: 'Roboto, sans-serif',
            textTransform: 'uppercase',
            lineHeight: '1.4',
          }}
        >
          BIENVENIDO A AUTO MARKET
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#f0f0f0',
            mt: 2,
            fontWeight: '300',
            fontSize: '1.2rem',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
          }}
        >
          La mejor plataforma para la compra y venta de todo tipo de autos, con la confianza y seguridad que necesitas.
        </Typography>
      </Box>
</Container>



<Container maxWidth="xl" sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, padding: 4 }}>
  {/* Imagen redondeada */}
  <Box
    component="img"
    src={fondo}
    alt="Fondo"
    sx={{
      width: '80%',
      borderRadius: '50%',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
  />
  {/* Texto de introducción */}
  <Box sx={{ ml: 6, textAlign: 'left', maxWidth: '600px' }}>
    <Typography
      variant="h4"
      sx={{
        color: '#ffffff',
        fontWeight: 'bold',
        mb: 3,
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '1px',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
      }}
    >
      Empresa líder en la venta y compra de automóviles en toda América Latina.
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: '#dcdcdc',
        fontSize: '1.1rem',
        lineHeight: '1.7',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'justify',
        letterSpacing: '0.5px',
      }}
    >
      Reconocida como la opción número uno por su compromiso con la calidad, transparencia y satisfacción del cliente. 
      Ofrecemos una experiencia excepcional en la adquisición y comercialización de vehículos, adaptándonos a las necesidades
      de nuestros clientes y estableciendo un estándar de confianza en el mercado automotriz de la región.
    </Typography>
  </Box>
</Container>




<Container maxWidth="xl" sx={{ my: 5, padding: '0 24px' }}>
      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          color: '#ffffff',
          mt: 2,
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          mb: 4,
        }}
      >
        Nuestros Productos
      </Typography>

      <Grid container spacing={6} sx={{ justifyContent: 'center' }}>
        {/* Primer Card - Autos Semi Nuevos */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              backgroundColor: '#1a1a1a',
              color: '#f0f0f0',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              border: '2px solid #b0b0b0', // Borde plateado
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.6)',
                transform: 'translateY(-5px)',
              },
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px' }}>
              <Typography variant="h5" sx={{ color: '#00aaff', mb: 2, fontWeight: 'bold' }}>
                Autos Semi Nuevos
              </Typography>
              <Typography variant="body2" sx={{ color: '#dcdcdc', textAlign: 'center', lineHeight: 1.5 }}>
                Descubre una amplia gama de autos semi nuevos a precios competitivos. Todos los vehículos están en excelentes condiciones.
              </Typography>
            </CardContent>
            <Box
              component="img"
              src={ehh}  // Aquí va la imagen correspondiente
              alt="Fondo"
              sx={{
                width: '100%',
                maxHeight: '180px',
                objectFit: 'cover',
                alignSelf: 'center',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.4s ease-in-out, filter 0.4s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)', // Efecto de zoom
                  filter: 'brightness(1.2)', // Efecto de iluminación
                },
              }}
            />
          </Card>
        </Grid>

        {/* Segundo Card - Autos con Gran Recorrido */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              backgroundColor: '#1a1a1a',
              color: '#f0f0f0',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              border: '2px solid #b0b0b0', // Borde plateado
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.6)',
                transform: 'translateY(-5px)',
              },
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px' }}>
              <Typography variant="h5" sx={{ color: '#00aaff', mb: 2, fontWeight: 'bold' }}>
                Autos Con Gran Recorrido
              </Typography>
              <Typography variant="body2" sx={{ color: '#dcdcdc', textAlign: 'center', lineHeight: 1.5 }}>
                Ofrecemos autos con gran kilometraje y planes de financiamiento flexibles para tu comodidad.
              </Typography>
            </CardContent>
            <Box
              component="img"
              src={ehh}  // Aquí va la imagen correspondiente
              alt="Fondo"
              sx={{
                width: '100%',
                maxHeight: '180px',
                objectFit: 'cover',
                alignSelf: 'center',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.4s ease-in-out, filter 0.4s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1)', // Efecto de zoom
                  filter: 'brightness(1.2)', // Efecto de iluminación
                },
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














