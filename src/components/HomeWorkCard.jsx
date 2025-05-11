import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const MediaCard = ({ id, image, title, category, course }) => {
    const navigate = useNavigate();

    const navigateToPost = () => {
        navigate(`/post/${id}`);
    }
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#000' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#000' }}>
          {category} - {course}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
            size="small"
            onClick={navigateToPost}
        >
            Ver
        </Button>
      </CardActions>
    </Card>
  );
}