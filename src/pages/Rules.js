import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Rules = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Game Rules
      </Typography>
      
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Basic Rules
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the rules section! Here you'll find comprehensive information about tabletop RPG mechanics.
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Character Creation
          </Typography>
          <Typography variant="body1" paragraph>
            Characters are created using a point-buy system or rolling dice for ability scores.
          </Typography>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Combat
          </Typography>
          <Typography variant="body1" paragraph>
            Combat is turn-based, with initiative determining the order of actions.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Rules;
