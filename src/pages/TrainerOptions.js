import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Tabs, 
  Tab,
  useTheme,
  useMediaQuery,
  styled,
  Grid
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TrainerBackground from '../components/TrainerBackground';

const trainerBackgrounds = [
  {
    id: 'acolyte',
    name: 'Acolyte',
    description: "The history of Thaloria has long been intermixed with the presence of monsters. From times before, a lot of religious groups have formed around the worship of monsters as nature spirits and guardians of sacred grounds. Some monsters that have lived long enough in the wild have attained mythical status bordering what humans perceive as deities. You are one such believer of those things. Whether you are shaman, clergyman or pilgrim before, monsters being religious figures is part of who you are. You now decided to start your journey as a trainer, as a way to get closer to understanding your beliefs. You hope to exemplify the ideals your sect believes as you tackle the challenge of raising and training your monster.",
    bonuses: ["Tame", "Care", "Persuade"],
    imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'wilderness-guide',
    name: 'Wilderness Guide',
    description: "Having spent years navigating untamed lands, you've developed an innate understanding of creatures in their natural habitats. Your connection to nature makes you particularly adept at training wild monsters.",
    bonuses: ["+2 to Survival checks", "Advantage on tracking monsters", "Bonus language: Sylvan"],
    imageUrl: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'arena-champion',
    name: 'Arena Champion',
    description: "A veteran of monster battles, you've honed your skills in competitive arenas. Your experience in high-stakes battles gives you unique insights into combat training and monster tactics.",
    bonuses: ["+2 to Intimidation checks", "Proficiency with one weapon type", "Bonus to initiative"],
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'noble-scion',
    name: 'Noble Scion',
    description: "Born into privilege, you've had access to the finest trainers and rarest monsters. Your education in monster husbandry and noble connections provide unique advantages.",
    bonuses: ["+2 to Persuasion checks", "Access to rare items", "Bonus language: Elvish"],
    imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  }
];

const BookTabs = styled(Tabs)(({ theme }) => ({
  minHeight: '48px',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-flexContainer': {
    position: 'relative',
    zIndex: 1,
    gap: '4px',
    padding: '0 16px',
  },
}));

const BookTab = styled(Tab)(({ theme, selected }) => ({
  zIndex: 1,
  position: 'relative',
  borderRadius: '8px 8px 0 0',
  padding: '12px 24px',
  minHeight: '48px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderBottom: 'none',
  marginRight: '4px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-selected': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&:first-of-type': {
    marginLeft: '8px',
  },
  '&:last-of-type': {
    marginRight: '0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
    fontSize: '0.875rem',
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`trainer-tabpanel-${index}`}
      aria-labelledby={`trainer-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ 
          p: 4,
          border: '1px solid',
          borderColor: 'divider',
          borderTop: 'none',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopRightRadius: index === 0 ? '8px' : '0',
          minHeight: '300px',
          backgroundColor: 'background.paper',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          {children}
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `trainer-tab-${index}`,
    'aria-controls': `trainer-tabpanel-${index}`,
  };
}

const TrainerOptions = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Button 
        component={RouterLink} 
        to="/player-options" 
        sx={{ mb: 2 }}
        startIcon={<span>←</span>}
      >
        Back to Player Options
      </Button>
      
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Trainer Options
      </Typography>

      <Box sx={{ mt: 4, position: 'relative' }}>
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <BookTabs
            value={value}
            onChange={handleChange}
            aria-label="trainer options tabs"
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <BookTab label="Trainer Styles" {...a11yProps(0)} />
            <BookTab label="Trainer Backgrounds" {...a11yProps(1)} />
            <BookTab label="Bond Techniques" {...a11yProps(2)} />
            <BookTab label="Trainer Gear" {...a11yProps(3)} />
          </BookTabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>Trainer Styles</Typography>
          <Typography color="text.secondary">
            Choose a unique training style that defines your approach to monster training.
            Each style offers different bonuses and abilities.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h4" gutterBottom>Trainer Backgrounds</Typography>
          <Typography color="text.secondary" paragraph>
            Select a background that shaped your trainer's past and provides special knowledge or skills.
            Each background comes with unique bonuses and abilities.
          </Typography>
          
          <Grid container spacing={4}>
            {trainerBackgrounds.map((background) => (
              <Grid item xs={12} md={6} key={background.id}>
                <TrainerBackground 
                  name={background.name}
                  description={background.description}
                  bonuses={background.bonuses}
                  imageUrl={background.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h5" gutterBottom>Bond Techniques</Typography>
          <Typography color="text.secondary">
            Master special techniques that enhance the bond between you and your monsters.
          </Typography>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h5" gutterBottom>Trainer Gear</Typography>
          <Typography color="text.secondary">
            Equip specialized gear that provides various benefits to you and your monsters.
          </Typography>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default TrainerOptions;
