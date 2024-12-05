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
import { IconButton, Box, Avatar, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

const MainComponent = ({ data, handleEdit, userData }) => {
    const filteredData = data.filter((row) => row.user_id === userData.id);
    console.log('userData', userData);

    return (
        <>
            
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
                    maxHeight: '70vh', // Ajuste para que la tabla no sobrepase la pantalla
                    overflowY: 'auto',  // Agrega scroll si la tabla es más alta que el contenedor
                    boxShadow: 3,
                    borderRadius: '8px',
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
        </>
    );
};

export default MainComponent;
