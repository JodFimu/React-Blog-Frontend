import * as React from 'react';
import { useNavigate } from 'react-router-dom'; 
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import imgTec from '../assets/centralizedclouddatablockchaintechnologydigital_95883.png'
import imgTall from '../assets/code_icon-icons.com_73620.png'
import imgPractica from '../assets/ai_artificial_intelligence_robot_chip_brain_technology_icon_179495.png'

export const  NestedList = () =>{
  const navigate = useNavigate();
  return (
    <List
      sx={{ 
        width: '100%',
        height: '100%',
        bgcolor: '#c6d4e1',
        color: '#fff', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader 
            component="div" 
            id="nested-list-subheader"
            sx={{ bgcolor: '#c6d4e1', color: '#fff' }} 
        >
          Cursos
        </ListSubheader>
      }
    >
      <ListItemButton sx={{ color: '#fff', '&:hover': { bgcolor: '#35516d' } }}
        onClick={() => navigate('/course/Tecnologia')} >
        <ListItemIcon>
          <img src={imgTec} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
        </ListItemIcon>
        <ListItemText primary="Tecnologia" />
      </ListItemButton>
      <ListItemButton sx={{ color: '#fff', '&:hover': { bgcolor: '#35516d' } }}
              onClick={() => navigate('/course/Taller')} >
        <ListItemIcon>
          <img src={imgTall} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
        </ListItemIcon>
        <ListItemText primary="Taller" />
      </ListItemButton>
      <ListItemButton sx={{ color: '#fff', '&:hover': { bgcolor: '#35516d' } }}        
      onClick={() => navigate('/course/Practica Supervisada')} >

        <ListItemIcon>
          <img src={imgPractica} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
        </ListItemIcon>
        <ListItemText primary="Practica Supervisada" />
      </ListItemButton>
    </List>
  );
}