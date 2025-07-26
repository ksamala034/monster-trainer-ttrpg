import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Divider, 
  styled,
  useTheme,
  IconButton
} from '@mui/material';


const BackgroundContainer = styled(Paper)(({ theme }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[2],
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const BackgroundHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  padding: theme.spacing(3),
  textAlign: 'center',
}));

// const BackgroundImage = styled(Box)(({ theme, imageUrl }) => ({
//   height: '200px',
//   backgroundImage: `url(${imageUrl || 'https://via.placeholder.com/800x400?text=Background+Image'})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   position: 'relative',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))',
//   },
// }));

const BackgroundContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const BonusBadge = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  borderRadius: '16px',
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontSize: '0.875rem',
  fontWeight: 500,
}));

const TrainerBackground = ({ 
  name = "Sample Background", 
  description = "This is a sample background description that provides context about the trainer's past experiences and how they've shaped their abilities.",
  bonuses = ["+2 to Insight checks", "Proficiency in one skill", "Bonus language"],
  // imageUrl
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <BackgroundContainer elevation={3}>
      {/* <BackgroundImage imageUrl={imageUrl} /> */}
      
      <BackgroundHeader>
        <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white' }}>
          {name}
        </Typography>
      </BackgroundHeader>
      
      <BackgroundContent onClick={toggleExpand} sx={{ cursor: 'pointer' }}>
        <Box sx={{ 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: expanded ? 'none' : 3,
          WebkitBoxOrient: 'vertical',
        }}>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          color="primary" 
          sx={{ 
            textAlign: 'left',
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {expanded ? 'Show less' : 'Learn more'}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body1" gutterBottom>
          Choose two skills to be proficient in:
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {bonuses.map((bonus, index) => (
            <BonusBadge key={index} sx={{ backgroundColor: 'primary.main', color: 'white' }}>
              {bonus}
            </BonusBadge>
          ))}
        </Box>
      </BackgroundContent>
    </BackgroundContainer>
  );
};

export default TrainerBackground;
