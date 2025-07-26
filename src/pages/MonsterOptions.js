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

const BookTab = styled(Tab)(({ theme }) => ({
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
      id={`monster-tabpanel-${index}`}
      aria-labelledby={`monster-tab-${index}`}
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
    id: `monster-tab-${index}`,
    'aria-controls': `monster-tabpanel-${index}`,
  };
}

const monsterTypes = [
  { name: 'Overview', description: 'General information and traits for all monster types.' },
  { name: 'Mythwrites', description: 'Mystical and arcane creatures with magical abilities.' },
  { name: 'Wunderwerks', description: 'Mechanical and technological marvels with unique functions.' },
  { name: 'Gloomwatch', description: 'Shadowy and elusive beings of darkness and mystery.' },
  { name: 'Wyldebonde', description: 'Nature-bound creatures with primal and untamed powers.' }
];

const MonsterOptions = () => {
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
        Monster Options
      </Typography>

      <Box sx={{ mt: 4, position: 'relative' }}>
        <Box sx={{ position: 'relative', zIndex: 2, overflowX: 'auto' }}>
          <BookTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {monsterTypes.map((type, index) => (
              <BookTab 
                key={type.name} 
                label={type.name} 
                {...a11yProps(index)} 
              />
            ))}
          </BookTabs>
        </Box>

        {monsterTypes.map((type, index) => (
          <TabPanel key={type.name} value={value} index={index}>
            <Typography variant="h4" gutterBottom>
              {type.name}
            </Typography>
            <Typography color="text.secondary" paragraph>
              {type.description}
            </Typography>
            <Typography color="text.secondary">
              Detailed information about {type.name.toLowerCase()} monsters will be available here.
            </Typography>
          </TabPanel>
        ))}
      </Box>
    </Container>
  );
};

export default MonsterOptions;
