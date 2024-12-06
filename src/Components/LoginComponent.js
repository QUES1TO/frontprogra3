import React from "react";
import { FormHelperText, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';


const LoginComponent = ({
  handleEmailChange,
  handlePasswordChange,
  authenticate,
  emailErrorState,
  emailErrorMessage,
}) => {
  const errorEmail = () => {
    return (
      emailErrorState && (
        <FormHelperText error>{emailErrorMessage}</FormHelperText>
      )
    );
  };

  return (
    <>
      {/* Navbar */}
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', width: '100%', color: '#f0f0f0' }}>
    
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
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

      {/* Login Form */}
      <div className="card-container" style={{ marginTop: '80px' }}>
        <Card>
          <CardContent>
            <h1>Login</h1>
            <form>
              <FormControl className="login-form-control">
                <TextField
                  className="login-input"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  placeholder="Introduzca su Email"
                  error={emailErrorState}
                  onChange={handleEmailChange}
                />
                {errorEmail()}
                <TextField
                  className="login-input"
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  placeholder="Introduzca su Contraseña"
                  error={false}
                  onChange={handlePasswordChange}
                />
                <Button onClick={authenticate} variant="outlined" startIcon={<AirplanemodeInactiveIcon />}>
                  Ingresar
                </Button>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
    
  );
};

export default LoginComponent;  