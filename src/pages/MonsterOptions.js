import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const MonsterOptions = () => {

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button 
        component={RouterLink} 
        to="/player-options" 
        sx={{ mb: 2 }}
      >
        ← Back to Player Options
      </Button>
      
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Monster Options
      </Typography>
      
      <Paper sx={{ p: 6, textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom color="text.secondary">
          Coming Soon
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monster customization features are currently in development.
        </Typography>
      </Paper>
    </Container>
  );
};

export default MonsterOptions;
