import React, { useState } from 'react';
import {
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import { CardWrapper } from './commanStyle'; // Ensure this is correctly defined and imported

const LevelsCard = ({ name, children, setZoomedId }) => {
  const [open, setOpen] = useState(true);

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  return (
    <CardWrapper cardWidth="150px">
      <Typography variant="h5" sx={{ textAlign: "center", mb: 1, color:'white' }} color="initial">{name}</Typography>
      {/* <Typography variant="h6">{name}</Typography> */}
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{
          overflow:'auto',
          height:'25vh'
        }}
      >
        {children.map((child, index) => (
          <div key={index}>
            <ListItemButton onClick={() =>{setZoomedId(child)
             handleClick(index)}}>
              <ListItemText primary={child.name} />
            </ListItemButton>
            {child.children && (
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {child.children.map((subChild, subIndex) => (
                    <ListItemButton key={subIndex} sx={{ pl: 4 }} onClick={() => setZoomedId(subChild)}>
                      <ListItemText primary={subChild.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </CardWrapper>
  );
};

export default LevelsCard;

