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
      <AppBar position="sticky" sx={{ backgroundColor: '#0d1b2a' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#f0f0f0' }}>
            Compra y Venta de Autos
          </Typography>
          <Button component={Link} to="/inicio" sx={{ color: '#f0f0f0' }} className="mx-2">
            Inicio
          </Button>
          <Button component={Link} to="/home2" sx={{ color: '#f0f0f0' }} className="mx-2">
            Ver Autos
          </Button>
          <Button component={Link} to="/home" sx={{ color: '#f0f0f0' }} className="mx-2">
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
    </>
  );
};

export default LoginComponent;  