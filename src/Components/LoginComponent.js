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
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        width: "100%",
        color: "#f0f0f0",
      }}
    >
      {/* Navbar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          mb: 4,
        }}
      >
        <Toolbar>
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
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
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
                  color: "#00aaff",
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#ffaa00",
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
            maxWidth: 400,
            width: "100%",
            p: 3,
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            backgroundColor: "#1a1a1a",
            color: "#f0f0f0",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              Iniciar Sesión
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
