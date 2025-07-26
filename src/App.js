import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterCreator from './pages/CharacterCreator';
import PlayerOptions from './pages/PlayerOptions';
import TrainerOptions from './pages/TrainerOptions';
import MonsterOptions from './pages/MonsterOptions';
import Rules from './pages/Rules';
import About from './pages/About';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e25435', // Terracotta - warm, earthy orange-red
      light: '#f4bc9c', // Peach - lighter warm tone
      dark: '#6d3823', // Dark Brown - deep earthy brown
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2c4c49', // Dark Teal - natural forest green
      light: '#aa6e57', // Medium Brown-Rose - warm accent
      dark: '#1a2f2d', // Darker Teal
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF7F0', // Warm Cream - light, warm background closer to white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#6d3823', // Dark Brown for primary text
      secondary: '#aa6e57', // Medium Brown-Rose for secondary text
    },
  },
  typography: {
    fontFamily: '"Crimson Text", "Times New Roman", serif',
    h1: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#6d3823',
      textTransform: 'none',
    },
    h2: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 800,
      fontSize: '2rem',
      lineHeight: 1.3,
      color: '#6d3823',
      textTransform: 'none',
    },
    h3: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 800,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      color: '#6d3823',
      textTransform: 'none',
    },
    h4: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 800,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#6d3823',
      textTransform: 'none',
    },
    h5: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: '#aa6e57',
    },
    h6: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 700,
      fontSize: '1.1rem',
      lineHeight: 1.4,
      color: '#aa6e57',
    },
    body1: {
      fontFamily: '"Crimson Text", serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#6d3823',
    },
    body2: {
      fontFamily: '"Crimson Text", serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#aa6e57',
    },
    button: {
      fontFamily: '"Libre Baskerville", serif',
      fontWeight: 700,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Crimson Text", serif',
      fontSize: '0.75rem',
      color: '#5D4037',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        strong: {
          fontWeight: 700,
          color: '#6d3823',
        },
        b: {
          fontWeight: 700,
          color: '#6d3823',
        },
        '.MuiTypography-root strong': {
          fontWeight: 700,
          color: '#6d3823',
        },
        '.MuiTypography-root b': {
          fontWeight: 700,
          color: '#6d3823',
        },
        // Dark teal background overrides
        '.MuiPaper-root[style*="background-color: rgb(44, 76, 73)"] *': {
          color: '#FAF7F0 !important',
        },
        '.MuiBox-root[style*="background-color: rgb(44, 76, 73)"] *': {
          color: '#FAF7F0 !important',
        },
        '.MuiButton-root[style*="background-color: rgb(44, 76, 73)"]': {
          color: '#FAF7F0 !important',
        },
        // Dark teal class-based overrides
        '.dark-teal-bg': {
          backgroundColor: '#2c4c49 !important',
          color: '#FAF7F0 !important',
          '& *': {
            color: '#FAF7F0 !important',
          },
        },
        // Sidebar active section overrides
        '.MuiListItem-root.Mui-selected': {
          backgroundColor: '#2c4c49 !important',
          color: '#FAF7F0 !important',
          '& .MuiListItemText-primary': {
            color: '#FAF7F0 !important',
          },
          '& .MuiListItemText-secondary': {
            color: '#FAF7F0 !important',
          },
          '& .MuiListItemIcon-root': {
            color: '#FAF7F0 !important',
          },
          '&:hover': {
            backgroundColor: '#1a2f2d !important',
          },
        },
        // Additional sidebar overrides for highlighted items
        '.MuiListItem-root[style*="background-color: rgb(44, 76, 73)"]': {
          color: '#FAF7F0 !important',
          '& *': {
            color: '#FAF7F0 !important',
          },
        },
        // Navbar hover effects
        '.MuiAppBar-root .MuiButton-root': {
          transition: 'all 0.3s ease-in-out',
          borderRadius: '8px',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: '#FAF7F0',
            color: '#6d3823',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(109, 56, 35, 0.2)',
          },
        },
        // Navbar title hover effect
        '.MuiAppBar-root .MuiTypography-h6': {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            color: '#f4bc9c',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character-creator" element={<CharacterCreator />} />
          <Route path="/player-options" element={<PlayerOptions />} />
          <Route path="/player-options/trainer" element={<TrainerOptions />} />
          <Route path="/player-options/monster" element={<MonsterOptions />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
