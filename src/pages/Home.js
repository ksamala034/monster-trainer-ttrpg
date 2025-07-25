import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to Monster Trainer TTRPG
      </Typography>
      <Typography variant="h6" component="h1" gutterBottom align="center">Explore Thaloria, where technology meets magic and extraordinary Monsters shape civilization</Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Character Creator
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Create your perfect RPG character with our intuitive character creator. Customize your character's attributes, skills, and background.
              </Typography>
              <Button 
                variant="contained" 
                component={RouterLink} 
                to="/character-creator"
                sx={{ mt: 2 }}
              >
                Create Character
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Game Rules
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Explore our comprehensive collection of RPG rules, mechanics, and game systems. Perfect for both new and experienced players.
              </Typography>
              <Button 
                variant="contained" 
                component={RouterLink} 
                to="/rules"
                sx={{ mt: 2 }}
              >
                View Rules
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
