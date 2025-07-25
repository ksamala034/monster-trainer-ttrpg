import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Monster Trainer TTRPG
      </Typography>
      
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="body1" paragraph>
          Monster Trainer TTRPG is your comprehensive hub for tabletop roleplaying games. Whether you're a seasoned dungeon master or a new player, our tools and resources will enhance your gaming experience.
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Features
          </Typography>
          <Typography variant="body1" paragraph>
            • Character Creator with customizable attributes and skills
          </Typography>
          <Typography variant="body1" paragraph>
            • Comprehensive rule references
          </Typography>
          <Typography variant="body1" paragraph>
            • Player options and customization tools
          </Typography>
          <Typography variant="body1" paragraph>
            • Campaign management resources
          </Typography>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            Getting Started
          </Typography>
          <Typography variant="body1" paragraph>
            Start by creating your first character using our Character Creator tool. Explore the rules section to familiarize yourself with game mechanics, and check out the player options for additional customization.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
