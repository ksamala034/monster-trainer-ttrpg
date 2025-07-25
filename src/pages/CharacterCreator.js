import React, { useState } from 'react';
import { Container, Typography, Stepper, Step, StepLabel, Box, 
         Grid, TextField, FormControl, InputLabel, Select, MenuItem,
         Button, Paper, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const steps = ['Basic Info', 'Attributes', 'Skills', 'Background'];

const CharacterCreator = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    class: '',
    level: 1,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    skills: [],
    background: '',
    story: ''
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (field, value) => {
    setCharacter(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAttributeChange = (field, value) => {
    const newValue = Math.max(1, Math.min(20, parseInt(value) || 10));
    handleChange(field, newValue);
  };

  const handleSkillChange = (skill) => {
    setCharacter(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Character Name"
                value={character.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Race</InputLabel>
                <Select
                  value={character.race}
                  onChange={(e) => handleChange('race', e.target.value)}
                  label="Race"
                >
                  <MenuItem value="Human">Human</MenuItem>
                  <MenuItem value="Elf">Elf</MenuItem>
                  <MenuItem value="Dwarf">Dwarf</MenuItem>
                  <MenuItem value="Halfling">Halfling</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Class</InputLabel>
                <Select
                  value={character.class}
                  onChange={(e) => handleChange('class', e.target.value)}
                  label="Class"
                >
                  <MenuItem value="Warrior">Warrior</MenuItem>
                  <MenuItem value="Mage">Mage</MenuItem>
                  <MenuItem value="Rogue">Rogue</MenuItem>
                  <MenuItem value="Cleric">Cleric</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Strength"
                type="number"
                value={character.strength}
                onChange={(e) => handleAttributeChange('strength', e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Dexterity"
                type="number"
                value={character.dexterity}
                onChange={(e) => handleAttributeChange('dexterity', e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Constitution"
                type="number"
                value={character.constitution}
                onChange={(e) => handleAttributeChange('constitution', e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Intelligence"
                type="number"
                value={character.intelligence}
                onChange={(e) => handleAttributeChange('intelligence', e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Wisdom"
                type="number"
                value={character.wisdom}
                onChange={(e) => handleAttributeChange('wisdom', e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Charisma"
                type="number"
                value={character.charisma}
                onChange={(e) => handleAttributeChange('charisma', e.target.value)}
                InputProps={{ inputProps: { min: 1, max: 20 } }}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">Select Skills</Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  {['Acrobatics', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'].map((skill) => (
                    <Grid item xs={6} sm={4} key={skill}>
                      <Button
                        variant={character.skills.includes(skill) ? 'contained' : 'outlined'}
                        fullWidth
                        onClick={() => handleSkillChange(skill)}
                      >
                        {skill}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Background"
                value={character.background}
                onChange={(e) => handleChange('background', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Character Story"
                value={character.story}
                onChange={(e) => handleChange('story', e.target.value)}
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  const handleFinish = () => {
    // TODO: Implement character saving logic
    alert('Character creation completed!');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Character Creator
      </Typography>
      
      <Stepper activeStep={activeStep} sx={{ mt: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {getStepContent(activeStep)}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" onClick={handleFinish}>
            Finish
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          variant="outlined"
          component={RouterLink}
          to="/"
          sx={{ mr: 2 }}
        >
          Home
        </Button>
        <Button
          variant="outlined"
          onClick={() => setActiveStep(0)}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
};

export default CharacterCreator;
