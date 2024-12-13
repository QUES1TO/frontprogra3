import React from "react";
import { FormHelperText, TextField, Button, Card, CardContent, FormControl, AppBar, Toolbar, Typography, Box } from "@mui/material";
import AirplanemodeInactiveIcon from "@mui/icons-material/AirplanemodeInactive";
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo.png';
import logo2 from '../img/logo2.png';

const LoginComponent = ({
  handleEmailChange,
  handlePasswordChange,
  authenticate,
  emailErrorState,
  emailErrorMessage,
}) => {
  const navigate = useNavigate();

  const errorEmail = () => {
    return (
      emailErrorState && (
        <FormHelperText error>{emailErrorMessage}</FormHelperText>
      )
    );
  };

  const handleLogin = () => {
    // Llamar a la función de autenticación
    authenticate();
    
    // Suponiendo que la autenticación es exitosa, guarda el estado de 'authenticated' en localStorage
    localStorage.setItem("authenticated", "true");
    
    // Redirige al usuario a la página principal o la página a la que quieras redirigir
    navigate("/home"); 
  };

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

      {/* Login Form */}
      <Box
        component="img"
        src={logo2}
        alt="Logo2"
        sx={{
          height: 450,
          width: 'auto',
          marginRight: -6,
          position:'absolute',
          left: "50px",
          top: "120px",
        }}
      />
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "right",
          alignItems: "right",
          marginTop: "80px",
          left: "-250px",
        }}
      >
        <Card
          sx={{
            maxWidth: 400, // Tamaño más pequeño
    width: "100%",
    p: 3,
    borderRadius: 3,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    background: "linear-gradient(135deg, #1f1f1f, #292929)",
    color: "#f5f5f5",
    overflow: "hidden",
    border: "2px solid #c0c0c0", // Bordes plateados
          }}
        >  <Box
        component="img"
        src="https://via.placeholder.com/120" // Cambia esta URL por la imagen que desees.
        alt="Usuario"
        sx={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          margin: "0 auto 16px",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4)",
          border: "3px solid #c0c0c0", // Bordes plateados
        }}
      />
          <CardContent>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Bienvenido
            </Typography>
            <Typography
      variant="body2"
      sx={{
        mb: 3,
        color: "#b0b0b0",
        fontSize: "0.9rem",
      }}
    >
      Inicia sesión para continuar
    </Typography>
            <form>
              <FormControl fullWidth sx={{ gap: 2, mb: 2 }}>
                <TextField
                  id="outlined-basic-email"
                  label="Correo Electrónico"
                  variant="outlined"
                  placeholder="Introduzca su correo"
                  error={emailErrorState}
                  onChange={handleEmailChange}
                  autoComplete="off"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#2a2a2a",
                      borderRadius: 2,
                      color: "#f0f0f0",
                      boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.3)",
              border: "1px solid #c0c0c0", // Bordes plateados
                    },
                    "& .MuiInputLabel-root": { color: "#aaaaaa" },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#555555",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00aaff",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ffaa00",
                    },
                  }}
                />
                {errorEmail()}
                <TextField
                  id="outlined-basic-password"
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  placeholder="Introduzca su contraseña"
                  onChange={handlePasswordChange}
                  autoComplete="new-password"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#2a2a2a",
                      borderRadius: 2,
                      color: "#f0f0f0",
                      boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.3)",
              border: "1px solid #c0c0c0", // Bordes plateados
                    },
                    "& .MuiInputLabel-root": { color: "#aaaaaa" },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#555555",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00aaff",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ffaa00",
                    },
                  }}
                />
                <Button
                  onClick={handleLogin} // Cambié la función aquí para llamar a la nueva función
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#00aff",
                    color: "#ffffff",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#ffaa00",
                    },
                  }}
                >
                  Ingresar
                </Button>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;