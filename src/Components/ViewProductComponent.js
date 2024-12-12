import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Card, CardMedia, Box, TextField, Divider, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const ViewProductComponent = ({ data }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100%', width: '100%', color: '#f0f0f0' }}>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#0d1b2a' }}>
        <Toolbar>
          
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#f0f0f0' }}>
            Compra y Venta de Autos
          </Typography >
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
                  <Typography variant="h5" sx={{ color: '#f0f0f0', marginBottom: '8px' }}>
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
                  <Typography variant="h6" sx={{ color: '#f0f0f0', fontSize: '1.5rem', marginTop: '16px' }}>
                    ${product.precio}
                  </Typography>
                </Box>

                {/* Imagen del producto a la derecha */}
                <CardMedia
                  component="img"
                  image={`http://localhost:8000/storage/${product.url_imagen}`}
                  alt={product.nombre}
                  sx={{
                    width: '90%',
                  
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    
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
