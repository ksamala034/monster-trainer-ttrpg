import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Button, 
  styled 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const BookCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  height: '100%',
  padding: '16px',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

const BookCover = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontWeight: 600,
  fontSize: '1.1rem',
}));

const QuickLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '16px',
}));

const QuickLinkButton = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
  borderRadius: '8px',
  padding: '8px 16px',
  fontSize: '0.875rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

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
          <BookCard>
            <BookCover>
              <Typography variant="h5" component="h2" color="white">
                Trainer Options
              </Typography>
            </BookCover>
            <Typography variant="body1" color="text.secondary" paragraph>
              Configure trainer abilities, specializations, and progression paths. Customize your trainer's skills and unlock new training techniques.
            </Typography>
            <QuickLinks>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/trainer#trainer-styles"
              >
                Trainer Styles
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/trainer#trainer-backgrounds"
              >
                Trainer Backgrounds
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/trainer#bond-techniques"
              >
                Bond Techniques
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/trainer#trainer-gear"
              >
                Trainer Gear
              </QuickLinkButton>
            </QuickLinks>
          </BookCard>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <BookCard>
            <BookCover>
              <Typography variant="h5" component="h2" color="white">
                Monster Options
              </Typography>
            </BookCover>
            <Typography variant="body1" color="text.secondary" paragraph>
              Explore monster variants, abilities, and customization options. Create unique creatures for your campaigns and adventures.
            </Typography>
            <QuickLinks>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/monster#overview"
              >
                Overview
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/monster#mythwrites"
              >
                Mythwrites
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/monster#wunderwerks"
              >
                Wunderwerks
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/monster#gloomwatch"
              >
                Gloomwatch
              </QuickLinkButton>
              <QuickLinkButton 
                variant="outlined" 
                component={RouterLink} 
                to="/player-options/monster#wyldebonde"
              >
                Wyldebonde
              </QuickLinkButton>
            </QuickLinks>
          </BookCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlayerOptions;
