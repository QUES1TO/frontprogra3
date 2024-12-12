import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Avatar,
  Typography,
  AppBar,
  Toolbar,
  Button,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import logo from "../img/logo.png";

const MainComponent = ({ data, handleEdit, userData }) => {
  const filteredData = data.filter((row) => row.user_id === userData.id);
  console.log("userData", userData);

  return (
    <>
      <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", width: "100%", color: "#f0f0f0" }}>
        {/* Menu */}
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
                width: "auto",
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

        {/* Contenedor principal */}
        <Box
          sx={{
            px: 12, // Padding horizontal
          }}
        >
          {/* Información del usuario */}
          <Box sx={{
                position: 'absolute',
                top: 7,
                right: 0,
                p: 2,
                border: '1px solid #444',  
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#333',  
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                color: 'white'
            }}>
            <Avatar sx={{ marginRight: 1, backgroundColor: "#1E2A47" }}>
              {userData.nombre ? userData.nombre[0].toUpperCase() : "U"}
            </Avatar>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {userData.nombre}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {userData.email}
              </Typography>
            </Box>
          </Box>

          {/* Tabla */}
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: "#333",
              color: "white",
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Table sx={{ minWidth: 850 }} aria-label="Product List">
              <TableHead sx={{ backgroundColor: "#1E2A47", color: "white" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>Nombre</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Marca
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Kilometraje
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Año
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Combustible
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Transmisión
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Motor
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Color
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Puertas
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Precio
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Imagen
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", color: "white" }}>
                    Opciones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:hover": { backgroundColor: "#2C3E50" },
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell sx={{ color: "white" }}>{row.nombre}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.marca}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.kilometraje}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.año}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.combustible}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.transmision}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.motor}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.color}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">{row.puertas}</TableCell>
                    <TableCell sx={{ color: "white" }} align="right">${row.precio}</TableCell>
                    <TableCell align="right">
                      <CardMedia
                        className="prp"
                        component="img"
                        height="100"
                        image={`http://localhost:8000/storage/${row.url_imagen}`}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleEdit(row)} sx={{ color: "white" }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton sx={{ color: "#f44336" }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </>
  );
};

export default MainComponent;
