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
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
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
