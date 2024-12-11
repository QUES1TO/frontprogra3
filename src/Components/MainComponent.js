import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Box, Avatar, Typography,AppBar,Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

import CardMedia from '@mui/material/CardMedia';

const MainComponent = ({ data, handleEdit, userData }) => {
    const filteredData = data.filter((row) => row.user_id === userData.id);
    console.log('userData', userData);

    return (
        <>
        <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', width: '100%', color: '#f0f0f0' }}>
                  
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
            
            <Box sx={{
                position: 'absolute',
                top: 160,
                right: 1170,
                p: 2,
                border: '1px solid #444',  
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#333',  
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                color: 'white'
            }}>
                <Avatar sx={{ marginRight: 1, backgroundColor: '#1E2A47' }}>
                    {userData.nombre ? userData.nombre[0].toUpperCase() : "U"}
                </Avatar>
                <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{userData.nombre}</Typography>
                    <Typography variant="body2" sx={{ color: 'gray' }}>{userData.email}</Typography>
                </Box>
            </Box>

            <div className="main-body">
            
                <TableContainer component={Paper} sx={{
                    position: 'absolute',
                    top: 60,
                    right: 0,
                    p: 2,
                    backgroundColor: '#333',  
                    color: 'white',
                    mt: 2, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 6 
                   
                }}>
                    <Table sx={{ minWidth: 850 }} aria-label="Product List">
                        <TableHead sx={{ backgroundColor: '#1E2A47', color: 'white' }}>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Nombre</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Marca</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Kilometraje</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Año</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Combustible</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Transmisión</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Motor</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Color</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Puertas</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Precio</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Imagen</TableCell>
                              
                                <TableCell align="right" sx={{ fontWeight: 'bold', color: 'white' }}>Opciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.map((row) => (
                                <TableRow key={row.id} sx={{
                                    '&:hover': { backgroundColor: '#2C3E50' },
                                    '&:last-child td, &:last-child th': { border: 0 },
                                }}>
                                    <TableCell>{row.nombre}</TableCell>
                                    <TableCell align="right">{row.marca}</TableCell>
                                    <TableCell align="right">{row.kilometraje}</TableCell>
                                    <TableCell align="right">{row.año}</TableCell>
                                    <TableCell align="right">{row.combustible}</TableCell>
                                    <TableCell align="right">{row.transmision}</TableCell>
                                    <TableCell align="right">{row.motor}</TableCell>
                                    <TableCell align="right">{row.color}</TableCell>
                                    <TableCell align="right">{row.puertas}</TableCell>
                                    <TableCell align="right">${row.precio}</TableCell>
                                    <TableCell align="right">
                                    <CardMedia
                                       className="prp"
                                       component="img"
                                       height="100" 
                                       image={`http://localhost:8000/storage/${row.url_imagen}`} 
                                       /> 
                                    </TableCell>
                                    
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleEdit(row)} sx={{ color: '#1E2A47' }}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton sx={{ color: '#f44336' }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
            </div>
        </>
    );
};

export default MainComponent;
