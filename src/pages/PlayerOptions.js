import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const PlayerOptions = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Player Options
      </Typography>
      <Typography variant="h6" component="p" gutterBottom align="center" color="text.secondary">
        Customize your game experience with these specialized options
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Trainer Options
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Configure trainer abilities, specializations, and progression paths. Customize your trainer's skills and unlock new training techniques.
              </Typography>
              <Button 
                variant="contained" 
                component={RouterLink} 
                to="/player-options/trainer"
                sx={{ mt: 2 }}
              >
                View Trainer Options
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Monster Options
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Explore monster variants, abilities, and customization options. Create unique creatures for your campaigns and adventures.
              </Typography>
              <Button 
                variant="contained" 
                component={RouterLink} 
                to="/player-options/monster"
                sx={{ mt: 2 }}
              >
                View Monster Options
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlayerOptions;
