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
    id: 'agent',
    name: 'Agent',
    description: "There are multiple powers in play in the world of Thaloria. Multiple organizations and regions each with their own agendas and goals. Even amongst the four guilds themselves need to send someone to represent them, spy for them and fight for them. While monsters boast extreme magical powers that can beat other monsters, you recognize humans have various tools of their own disposal to gain power and influence other humans. You are one such person that believes in that power and the support one of these organizations can give. Whether officially under these organizations or as a freelancer you've had your experience working for these big organizations as your pick of spy, diplomat, corporate employee and the like. Whether mandated by your company or of your own free will you recognize the edge having a monster has over yours and your company's competition. You apply to be a trainer in the hopes of it being the next big step in your career.",
    bonuses: ["Question", "Persuade", "Escape"],
    imageUrl: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'artisan',
    name: 'Artisan',
    description: "Thaloria in its vastness is teeming with culture from the different kinds of people that call it home. From the layers of unearthed ancient artifacts, to the methods of which monster knowledge has been preserved, artists have been the secret back bone of lore and history in the ever changing landscape of Thaloria. Today you are one such person, eager to paint, cook, write or perform your experiences as you begin your travels around the world. Whether you came from a troupe of performers or if you are a solo artist, you decided to become a trainer to be able to explore the world for new sources of inspiration. Trainers are afforded certain privileges and you want to capitalize it with your monster partner. Whether you are hunting for a new exotic ingredient, wanting to render breathtaking landscapes and rare monsters, or learning new forms of song and dance from remote people, you are tickled by the call of new experiences.",
    bonuses: ["Recall", "Perform", "Fix"],
    imageUrl: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'athlete',
    name: 'Athlete',
    description: "Before the allyship humans had with monsters, Humans pitted their abilities against the monsters in open combat. Many stories of heroes felling mythical creatures and gladiators facing off dangerous beasts have long been recorded in the history of Thaloria. As man progressed out into more civilized ages, the need to fend off monsters became less and less aspirational but the desire to prove the indomitable human spirit is still very much present in all humans. Which is why sports became the new stage of these hungry individuals and with the addition of monsters as allies of humanity more intricate avenues to physically prove yourself became available. Whether humans are coaching monsters or training alongside them, Monsters working together with humans have made each other reach new levels of physical competition. As an athlete you find yourself at the crossroads of life, you might have gotten injured, or peaked in your current field. You decided to become a trainer, your body is not what it used to be but your mind is still sharp. You decided to make good use of your training as a human to enrich the life of a monster. Who knows maybe you learn something that lets you push past your limits as well.",
    bonuses: ["Carry", "Traverse", "Escape"],
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c2a4163f8b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'celebrity',
    name: 'Celebrity',
    description: "Humans, even on Thaloria, have always sought some form of recognition and fame. Up to these days there are actors, business owners and even nobles of some countries who are simply born or have clawed their way up into local or global notoriety. Public image is the most important thing for these kinds of people, and some of them have started incorporating monsters as part of their brand. Especially with the booming industry of monster battling, a lot of humans and their monster partners have reached the heights of super stardom simply by participating in the sport. Some celebrities have made a living by being bad at monster battling or playing it up as a villain in the more serialized circuits. You are one such notable person. Whether you are a micro-celebrity on the fringe of success, a wealthy heir to a business or an aristocratic house, your main goal as a trainer is now to gain more fame and fortune. You have idolized the successful people that have come before you and now as a trainer, you and your partner have summed up the courage to finally steal the spotlight.",
    bonuses: ["Performs", "Deceive", "Persuade"],
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'doctor',
    name: 'Doctor',
    description: "Medical professionals on Thaloria are almost needed at every frontier. Whether their practice is in the heart of a major city or at the fringes of society humans will always need the professional care of a doctor. The same is true for monsters albeit their care can take a plethora of forms aside from the physical. Given the nature of mana and essence monsters, Monster doctors blend a mix of both magic and science as they use every tool at their disposal to administer care and treatment to the myriad forms monsters take. As a medical professional, you could be the shaman of a tribe, a resident doctor in the big city or even a combat medic out in the field. Whatever the source of your medical knowledge you feel the call to learn more from the source itself, by taking a monster as a partner. Now as a trainer you can now expand your practice and knowledge with your new partner.",
    bonuses: ["Care", "Recall", "Tame"],
    imageUrl: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'enforcer',
    name: 'Enforcer',
    description: "Both humans and monsters can be wild and unruly creatures. The differences between and even more so monsters often lead to friction and conflict. As amazing as Thaloria is, it is not perfect and certain individuals are tasked to maintain peace. On the small scale, security officers, bouncers and body guards are hired by various individuals to keep people safe or secure assets  against humans and monsters. Larger than that, are the existence of several peace keeping organizations that employ  rangers and sheriffs to maintain a watchful on more out their locales. Since war is not unheard of in Thaloria, often both soldiers and monsters alike are sent to the frontlines to protect their nation's sovereignty. You have experience in these kinds of activities. You could be a soldier, law officer or simple body guard - someone who was trained to protect and maintain order. Now, by becoming a trainer you pursue a new way to protect and to serve. With a partner instilled with your discipline and fighting prowess, you can maintain a stronger vigil against all forms of felons and troublemakers.",
    bonuses: ["Carry", "Spot", "Break"],
    imageUrl: 'https://images.unsplash.com/photo-1549923746-5d3e9c4e4b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: "The world of Thaloria is vast and wild with many unexplored frontiers and undiscovered ruins. While most adventurers start out having no idea of the science and lore of the places they go, their wanderlust beckons them to journey far, wide and deep into the unknowns of the world. Thaloria harbors many secrets and equally many exploration companies that go on regular expeditions often hosted by the guilds or wealthy benefactors. These expeditions bring in many riches and knowledge that would set a man two or three lifetimes over. However it is the real adventurers who keep going back for the sheer thrill of discovery.You have had experience in one or two of these expeditions and your hunger for adventure has not yet been satiated. You notice that trainers with monsters are able to take on more dangerous and far off expeditions. You decide for yourself that becoming a trainer and sharing your adventures with a partner is the best way to satisfy the longing in your heart.",
    bonuses: ["Traverse", "Track", "Survive"],
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'grifter',
    name: 'Grifter',
    description: "Filled to the brim with riches and resources to gain, Thaloria is a land not exempt from the criminal element willing to exploit. Individuals and organizations alike have a long standing history of doing illicit activities that range from small-time crimes and scams to multiorganization black market dealings. Add this on top of monsters being a hot commodity poaching, trafficking, banditry,  theft and violent crimes related to acquiring monsters are omnipresent even in the most secure of places.You have a history of doing these unsavory things.  Whether you are in the midst of this kind of life or if you have left it all behind, the skills and knowledge of the seedy underworld have stuck in you. Given your trainer license, it is now your choice to turn your life around or use your partner to further your criminal ways.",
    bonuses: ["Deceive", "Steal", "Perform"],
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'handyman',
    name: 'Handyman',
    description: "The people of Thaloria wouldn't function if not for the day to day maintenance of mechanical and magical devices. Engineers, Magitechnicians, Construction workers, Waste Managers are all equal parts necessary for daily upkeep of a monster based society. With some monsters being used for labour or to produce energy, their gear and equipment need regular spruce up as they wear and break down from the monsters that use them - not to mention the destruction caused by wild monsters on human infrastructure. As such repairsmen are a valuable asset in human settlement. You used to be or still are one of these handymen. You have spent your time learning the ins and outs of both magic and machine and you've decided to obtain a trainer license to incorporate the use of monsters as part of your tool kit. With a partner by your side, no problem is too big for you to solve.",
    bonuses: ["Spot", "Fix", "Carry"],
    imageUrl: 'https://images.unsplash.com/photo-1589939709024-a2a533d0d0a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'outlander',
    name: 'Outlander',
    description: "Thaloria due to the recent advances due to the cooperative use of monsters, have created bustling metropolises and large areas of urban sprawl. However, while most humans live here, Thaloria still holds vast unexplored lands that host the locations of various remote and far off villages. Outlanders as they are commonly called, while disconnected from the main hubs of Thalorian activities, still have been found to have long standing traditions of veneration and cooperation with monsters. In fact these people have been found to have a culture that centers itself in the type of monsters found in their regions. Outlanders don’t necessarily have to be tribalistic but most of them rely on their relationship with monsters and nature that it's hard to view them without their deep connection to the wild. You are an Outlander as well. Either, your village had ties with the guild or if you have journeyed to the major cities to get your permit, you have now been granted the official title of trainer. As an outsider to most Thalorians, whether you like it or not, you  embody your village's ideals for human and monster relations. You now are challenged to   uphold those traditions or break free from them as a journey with your partner.",
    bonuses: ["Survive", "Care", "Hide"],
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'rancher',
    name: 'Rancher',
    description: "Not everyone who handles monsters are trainers. Some monsters used for manual labour or their food by-products are raised on ranches. These monsters require minimal training but still need the care and attention they require as with any other monster. Often these ranches double as farm land which lets these monsters help with the development of crops as part of their disciplining and training. Some ranches also become retirement homes for old monsters, often famous champion battlers, where they can live the rest of their lives in comfort. However, life on the range is not all too simple. Often, especially on farms that double as ranches, wild monsters would raid the crops and even attack livestock animals and monsters. As such ranchers are also tasked to wrangle these wild monsters and protect the ranches' inhabitants. You have worked on one of these ranches. You have experience with handling and caring for monsters. At some point, however, you decided to be an official trainer in order to better protect your ranch or maybe to branch out beyond the same plot of land. As a trainer you are put to the test as you wrangle, train and care for your very own partner monster.",
    bonuses: ["Handle Animal", "Nature", "Care"],
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'researcher',
    name: 'Researcher',
    description: "With lots of mysteries to uncover, Thaloria has no shortage of scientists, scholars and researchers. People whose sole goal in their life is to study and uncover the mysteries of the world. Primarily employed by the guilds, researchers are given a wide leeway for their studies especially in archeology, and mythofauna biology, engineering and arcana. Research grants and access to archives are but a letter away from being granted to most researchers. However the most prestigious of these researchers are field researchers. Romanticized and glamourized, field research takes up the vast majority of the scholarly work on the Thaloria and most endeavors are focused on on-site discoveries and explorations. As a person with a background in scholarly work you have determined in your studies to include a monster as your lab partner … or experiment. Perhaps your trainer permit affords better selection in terms of on-site work or perhaps you have factored that you needed a live test subject to prove your theories back in your lab. Whatever the case, your pursuit of knowledge has thrust you down a path deeper understanding thru becoming a trainer.",
    bonuses: ["Recall", "Fix", "Question"],
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'responder',
    name: 'Responder',
    description: "The planet of Thaloria can be as unpredictable and wild as the monster that inhabits it. Inclement weather, freak storms, earthquakes and other natural disasters are all part of living in this fascinating yet dangerous world. These devastating phenomena can also be caused by particularly strong and destructive wild monsters needing the immediate attention of trainers and the Guilds. While these organizations handle the monsters, Responders are the ones who keep people safe and rescue those caught in the crossfire of these devastating events and monsters. Responders take on a variety of tasks such as administering first aid, medical transportation, search and rescue, and crowd control. As such these individuals develop a wide variety of skills as well as second hand monster knowledge from their training and on field experience. You have handled a fair few of these disaster level events and you feel that you are ready to take on a rescue partner. By getting a trainer’s license, you believe you and your partner can not only respond to catastrophes but also participate in their prevention by taking on guild quests and activities.",
    bonuses: ["Escape", "Care", "Survive"],
    imageUrl: 'https://images.unsplash.com/photo-1583513705858-efee520b4bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'urchin',
    name: 'Urchin',
    description: "Through science and cooperation, the megametropolis that are scattered all over Thaloria have slowly come to compete in scale and grandeur to the primeval beauty of the thalorian wilderness. Most of these cities were not built from the ground up by settlers but  are often built on the infrastructure of some unknown civilization that has long given up sharing its secrets. Built on top of mysterious and magic foundations, monsters mysteriously spawn and habituate in the forgotten dark alleys and sprawling sewer systems in some of these cities. In a similar way, the humans of these cities have adapted to this literal concrete jungle in the hopes of eking out a living - amongst the great divide in wealth that commonly plague these metropoli. Folks that survive in these strange conditions have certainly developed a culture and skills wholly unique to their way of life. Unfortunately you had the same rough start as these people. It could be you were an orphan left on the streets or maybe you had a good  life before this situation but just fell in with the wrong crowd. In time, you manage to pull enough money to study and pass the Monster Trainer exam. It was a rough life but you survived and came out streetwise and tough but now with a monster in tow you are the cusp of your big break. Sure it might be an extra mouth to feed but you have gambled before and you know with a partner the odds  are finally stacked in your favour.",
    bonuses: ["Survive", "Hide", "Steal"],
    imageUrl: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 'wayfarer',
    name: 'Wayfarer',
    description: "Life on the road can be an exciting prospect for some Thalorians. With many routes, roads and ranges that snake around the various wilderness of the world of monsters, many individuals find comfort in the transitory. Changes in scenery to those people  is as familiar as any home. It is not like these folks are vagabonds. Messengers,  riders, delivery services and scouts are all valid occupations for people who can't seem to settle in one place. In fact, these people are the life blood of the cities of Thaloria and their function is very much appreciated by polite society. Which is contrasted by the dangers they face out in the rough roads  where various ne'er do wells both monsters and humans alike tend to hide and ambush. You are someone like this. A person who seems to be anxious whenever you have to stay put in a single place for too long. Maybe you learned the ropes of riding from your parents, or you are part of a wider organization of messengers or scouts. Maybe you simply  just don't like being tied down. However with danger ahead  and the solitude of travelling,  you dared not venture far. Now, while you were hesitant before, after acquiring  a Monster trainer license and a partner by your side the road ahead doesn't seem lonely no more.",
    bonuses: ["Ride", "Persuade", "Recall"],
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
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
