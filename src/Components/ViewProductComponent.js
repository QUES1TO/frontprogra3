import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, Box, TextField, Divider, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logo from '../img/logo.png';
const ViewProductComponent = ({ data }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false); // Estado para controlar si el mouse está sobre la imagen

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  // Función para cambiar la imagen con las flechas
  const handleImageChange = (direction) => {
    const images = [
      data[0]?.url_imagen,
      data[0]?.url_imagen2,
      data[0]?.url_imagen3,
      data[0]?.url_imagen4,
    ].filter((img) => img); // Filtra imágenes nulas o vacías

    const newIndex = (currentImageIndex + direction + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setMainImage(images[newIndex]);
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

      {/* Contenedor de producto */}
      <Container maxWidth="xl" sx={{ my: 5 }}>
        <Grid container justifyContent="center" spacing={4}>
          {data.map((product) => (
            <Grid item xs={12} sm={12} md={8} lg={8} key={product.id}>
              <Card
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'row',
                  cursor: 'default',
                }}
              >
                {/* Datos del producto a la izquierda */}
                <Box sx={{ padding: 2, flex: 1, marginRight: '32px' }}>
                  <Typography variant="h5" sx={{ color: 'red', marginBottom: '8px' }}>
                    {product.nombre}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Marca:</strong> {product.marca}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Modelo:</strong> {product.modelo}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Año:</strong> {product.año}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Kilometraje:</strong> {product.kilometraje} km
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Transmisión:</strong> {product.transmision}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Combustible:</strong> {product.combustible}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#dcdcdc', marginBottom: '8px' }}>
                    <strong>Puertas:</strong> {product.puertas}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'red', fontSize: '2.5rem', marginTop: '16px' }}>
                    ${product.precio}
                  </Typography>
                </Box>

                {/* Imagen principal */}
                <Box
                  sx={{
                    flex: 1,
                    marginLeft: '32px',
                    position: 'relative', // Para posicionar las flechas dentro de la imagen
                    '&:hover .arrows': { opacity: 1 }, // Muestra las flechas al pasar el mouse
                    maxWidth: '100%', // Hace que la imagen ocupe el máximo espacio disponible
                  }}
                  onMouseEnter={() => setHovered(true)} // Activar cuando el mouse entra en la imagen
                  onMouseLeave={() => setHovered(false)} // Desactivar cuando el mouse sale
                >
                  <CardMedia
                    component="img"
                    image={`http://localhost:8000/storage/${mainImage || product.url_imagen}`}
                    alt={product.nombre}
                    sx={{
                      width: '550px', // Asegura que la imagen ocupe el 100% del espacio disponible
                   }}
                  />
                  {/* Flechas de navegación */}
                  {hovered && (
                    <Box
                      className="arrows"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        opacity: 0.8,
                      }}
                    >
                      <IconButton onClick={() => handleImageChange(-1)} sx={{ color: '#ffaa00' }}>
                        <ArrowBackIosIcon />
                      </IconButton>
                      <IconButton onClick={() => handleImageChange(1)} sx={{ color: '#ffaa00' }}>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Box>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Comentarios */}
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" sx={{ color: '#f0f0f0', marginBottom: '20px' }}>Comentarios</Typography>
        <TextField
          fullWidth
          label="Deja tu comentario"
          variant="outlined"
          multiline
          rows={3}
          value={comment}
          onChange={handleCommentChange}
          sx={{ backgroundColor: '#333', marginBottom: '16px' }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ display: 'block', marginBottom: '32px' }}
          onClick={handleAddComment}
        >
          Agregar Comentario
        </Button>

        {/* Lista de comentarios */}
        <List>
          {comments.map((comm, index) => (
            <ListItem key={index}>
              <ListItemText primary={comm} sx={{ color: '#f0f0f0' }} />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default ViewProductComponent;
