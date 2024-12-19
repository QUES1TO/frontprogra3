// DeleteProductComponent.js

import React from "react";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteProductComponent = ({ handleDelete }) => {
     const navigate = useNavigate();
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro con opacidad
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    backgroundColor: "#333", // Fondo oscuro del card
                    color: "#fff", // Texto blanco
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    padding: "20px",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "2rem",
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        Eliminar Producto
                    </h1>
                    <Button
                        onClick={handleDelete}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        sx={{
                            marginTop: "20px",
                            color: "#ff6f61", // Color del texto del botón
                            borderColor: "#ff6f61", // Color del borde del botón
                            '&:hover': {
                                backgroundColor: "#ff6f61", // Color del fondo al pasar el mouse
                                color: "#fff", // Color del texto al pasar el mouse
                            },
                        }}
                    >
                        Eliminar Producto
                    </Button>
                    <Button
                        onClick={() => navigate("/home")}
                        variant="outlined"
                        
                        sx={{
                            marginTop: "20px",
                            color: "#ff6f61", // Color del texto del botón
                            borderColor: "#ff6f61", // Color del borde del botón
                            '&:hover': {
                                backgroundColor: "#ff6f61", // Color del fondo al pasar el mouse
                                color: "#fff", // Color del texto al pasar el mouse
                            },
                        }}
                    >
                        ATRAS
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default DeleteProductComponent;
