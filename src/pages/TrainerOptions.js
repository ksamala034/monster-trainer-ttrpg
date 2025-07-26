import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Button, 
  Tabs, 
  Tab,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
          <Typography variant="h5" gutterBottom>Trainer Backgrounds</Typography>
          <Typography color="text.secondary">
            Select a background that shaped your trainer's past and provides special knowledge or skills.
          </Typography>
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
