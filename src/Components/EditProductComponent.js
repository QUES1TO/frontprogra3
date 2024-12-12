import React from "react";
import { FormControl, TextField, Button, Card, CardContent, AppBar, Toolbar, Box, Grid, Typography } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const EditProductComponent = ({
  handleNombreChange,
  handleMarcaChange,
  handleKilometrajeChange,
  handleAñoChange,
  handleCombustibleChange,
  handleTransmisionChange,
  handleMotorChange,
  handleColorChange,
  handlePuertasChange,
  handlePrecioChange,
  previewImagenValue,
  handleUrlImagenChange,
  handleChangeCategoria,
  handleChangeUser,
  handleSaveData
}) => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', width: '100%', color: '#f0f0f0' }}>
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
            sx={{ height: 70, width: 'auto', marginRight: -6 }}
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
                  color: "#00aaff", // Celeste
                  textTransform: "none",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#ffaa00", // Naranja al pasar el mouse
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Product Form */}
      <div className="bodyproducto" >
        <Card id="crearproducto" sx={{ backgroundColor: '#333', borderRadius: 5, maxWidth: '800px', margin: '0 auto' }}>
          <CardContent>
            <Typography variant="h4" sx={{ color: '#fff', mb: 2 }}>Editar Producto aun no da</Typography>
            <form>
              <FormControl sx={{ display: 'flex', gap: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el nombre del producto"
                      onChange={handleNombreChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        color: '#ffffff', 
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff', 
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00', 
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff', 
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Marca"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca la marca"
                      onChange={handleMarcaChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#ffffff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Kilometraje"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el kilometraje"
                      onChange={handleKilometrajeChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Año"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el año"
                      onChange={handleAñoChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Combustible"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el tipo de combustible"
                      onChange={handleCombustibleChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Transmisión"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el tipo de transmisión"
                      onChange={handleTransmisionChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Motor"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el tipo de motor"
                      onChange={handleMotorChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Color"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el color"
                      onChange={handleColorChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Puertas"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el número de puertas"
                      onChange={handlePuertasChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Precio"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el precio"
                      onChange={handlePrecioChange}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                     type="file"
                     fullWidth
                     onChange={handleUrlImagenChange}
                     inputProps={{
                       accept: '.jpg, .png' // Restringe a imágenes JPG y PNG
                     }}
                     sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: '#00aaff',
                         '& .MuiOutlinedInput-root': {
                         '& fieldset': {
                         borderColor: '#00aaff',
                        },
                        '&:hover fieldset': {
                         borderColor: '#ffaa00',
                         },
                         
                         },
                        '& .MuiInputLabel-root': {
                         color: '#00aaff',
                        }
                        }}
                       />
                   </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Categoría"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca la categoría"
                      onChange={handleChangeCategoria}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Usuario"
                      variant="outlined"
                      fullWidth
                      placeholder="Introduzca el nombre de usuario"
                      onChange={handleChangeUser}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: '#00aaff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#00aaff',
                          },
                          '&:hover fieldset': {
                            borderColor: '#ffaa00',
                          },
                          '& input': {
                              color: '#ffffff', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                          color: '#00aaff',
                        }
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: '#00aaff', // Celeste
                    '&:hover': {
                      backgroundColor: '#ffaa00', // Naranja al pasar el mouse
                    },
                    marginTop: 2,
                  }}
                  onClick={handleSaveData}
                >
                  Guardar Producto
                </Button>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditProductComponent;
