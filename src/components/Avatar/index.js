import React                         from 'react';
import { makeStyles }                from '@material-ui/core/styles';
import { IconButton, Badge, Avatar } from '@material-ui/core';
import PhotoCamera                   from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles((theme) => ({
  root : {
    '& > *' : {
      margin : theme.spacing(1),
    },
  },
  input : {
    display : 'none',
  },
  small : {
    width  : theme.spacing(5),
    height : theme.spacing(5),
  },
  large : {
    width  : theme.spacing(7),
    height : theme.spacing(7),
  }
}));

export default function PlayerAvatar(props) {
  const classes = useStyles();
  
  return (
    <Badge
      overlap = 'circle'
      anchorOrigin = {{
        vertical   : 'bottom',
        horizontal : 'right',
      }}
      badgeContent = {
        <div className = {classes.root}>
          <input 
            accept    = 'image/*' 
            className = {classes.input} 
            id        = 'icon-button-file' 
            type      = 'file' 
          />
          <label htmlFor = 'icon-button-file'>
            <IconButton 
              color      = 'primary' 
              aria-label = 'upload picture' 
              component  = 'span'
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      }
    >
      <Avatar
        className = {props.size === 'large' ? classes.large : classes.small}
        alt = {props.alt}                              
        src = {props.picture}                        
      />
    </Badge>
  );
}