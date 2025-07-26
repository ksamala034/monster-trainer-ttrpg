import React, { useState } from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText, Grid, Button, useTheme, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight, MenuBook, Timeline, Psychology, Pets, LibraryBooks } from '@mui/icons-material';

const Rules = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentBasicsSection, setCurrentBasicsSection] = useState(0);
  const [currentGameFlowSection, setCurrentGameFlowSection] = useState(0);
  const [currentMonsterBattlesSection, setCurrentMonsterBattlesSection] = useState(0);
  const theme = useTheme();

  const basicsSubsections = [
    {
      title: 'Stat Scores',
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Stat Scores
          </Typography>
          
          <Typography variant="body1" paragraph>
            There are 6 main statistics that both trainer characters and monsters use in the game: <strong>Endurance</strong>, <strong>Agility</strong>, <strong>Strength</strong>, <strong>Intelligence</strong>, <strong>Resilience</strong> and <strong>Guile</strong>.
          </Typography>
          
          <Typography variant="body1" paragraph>
            For each 2 points beyond 10 in these scores the character or monster adds a +1 to their d20 or 2d10 rolls of the relevant stat score. For each 1 point below 8 in these the character or monster deducts a -1 to their d20 or 2d10 rolls of the relevant stat score. These are called <strong>stat score bonuses</strong>.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Endurance
          </Typography>
          <Typography variant="body1" paragraph>
            This stat determines the total health pool a character or monster gets and the amount of damage they can take before being knocked unconscious. The creature also gains additional health per trainer or essence level depending on this stat bonus modifier.
          </Typography>
          <Typography variant="body1" paragraph>
            A monster gains more maximum health per level equal to their Endurance score bonus.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Agility
          </Typography>
          <Typography variant="body1" paragraph>
            This stat determines how fast a character or monster moves and dodge attacks or dangerous hazards. This stat also determines your character or monster's hand eye coordination, reaction time and their ability to move stealthily.
          </Typography>
          <Typography variant="body1" paragraph>
            For each 4 points in Agility beyond 10, a character or monster gains an additional 5 feet in all their movement options.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Strength
          </Typography>
          <Typography variant="body1" paragraph>
            This stat determines the ability of your character or monster how much damage it does when doing any physical attacks and techniques. It also determines how much a character or monster can push and pull, as well do athletic feats of strength or win grappling contests.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Intelligence
          </Typography>
          <Typography variant="body1" paragraph>
            This stat determines how much damage a character or monster does when doing a magic based attack and techniques. It also determines a character's or monster's ability to learn quickly or recall information.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Resilience
          </Typography>
          <Typography variant="body1" paragraph>
            This stat determines the physical hardiness of a character or monster and how hard it is for them to take physical damage. It can also determine a character or monster's overall fitness and their physical appearance. For monsters specifically it also determines how likely is their chance to be physically injured.
          </Typography>
          <Typography variant="body1" paragraph>
            Trainers can enhance their Resilience with items and equipment.
          </Typography>
          <Typography variant="body1" paragraph>
            For each 4 points in Resilience beyond 10, a monster can gain an additional trait slot.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Guile
          </Typography>
          <Typography variant="body1" paragraph>
            This stat determines the character's or monster's ability to manipulate magic to protect them from magical harm and how hard it is for magical techniques or effects to deal damage to them. Guile also determines a character's ability to fool and manipulate others. For monster's specifically it also determines how likely is their chance to be magically injured. Trainers can enhance their guile with items and equipment.
          </Typography>
          <Typography variant="body1" paragraph>
            For each 4 points in Guile beyond 10 a monster can gain an additional memory slot.
          </Typography>
        </Box>
      )
    },
    {
      title: 'Skills & Proficiencies',
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Skills and Skill Proficiencies
          </Typography>
          
          <Typography variant="body1" paragraph>
            Skills represent non-combat and roleplay centric checks within the game. Each skill pertains to a certain general scope of actions tied to the stat score that both trainer characters and monster can use to overcome an encounter or find a solution to a problem.
          </Typography>
          
          <Typography variant="body1" paragraph>
            A trainer character or monster can have proficiency in certain skills to represent their talents, knowledge or natural ability to be good at the task. Whenever a character or monster is proficient at the task they add half their score bonus for that roll.
          </Typography>
          
          <Typography variant="body1" paragraph>
            The following are skill proficiencies that a character or monster can obtain:
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Agility-Based Skills
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Escape (Agility)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that involves escaping out of being binded, fitting through tight spaces, wriggling free of a grapple.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Hide (Agility)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that involves moving stealthily or remaining undetected by others.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Steal (Agility)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that involves the dexterity of taking, swapping out or exchanging objects without the notice of others. This ability also refers to any task that requires the disarming of traps and the opening of locks.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Perform (Agility)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any that involves feats of acrobatics and dexterity that seek to awe and impress an audience of people. For trainer characters it might mean playing instruments or being able to do gymnastics. For monsters it could also mean their ability to do parlor tricks such as roll over, high five or play dead.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Strength-Based Skills
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Break (Strength)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that requires brute physical force to break, open or smash a structure or object.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Carry (Strength)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that requires a character or monster to exert effort in lifting, pulling and pushing heavy objects. This skill also refers to any attempts of grappling and moving grappled individuals.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Traverse (Strength)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that needs extraneous athletic methods of moving beyond what a character or monster can normally do. This could be something along the lines of standing long jumps and high jumps to staying on and climbing difficult terrain.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Intelligence-Based Skills
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Scan (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that requires an individual to use their available senses to find points of interests in their immediate area.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Spot (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that requires an individual to find a specific object or evidence they already know what looks like.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Track (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that concerns the discovery of clues, trailing behind and finding an individual over long distances.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
            Resilience-Based Skills
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Pressure (Resilience)</Typography>
          <Typography variant="body1" paragraph>
            This skill refers to any task that uses one's physical appearance and body language to intimidate or feign superiority over another being.
          </Typography>
        </Box>
      )
    },
    {
      title: 'Trainer Only Skills',
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Trainer Only Skills
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Ride (Strength)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task involving a trainer riding a monster and staying on that monster without any equipment, through difficult terrain or if it's against the monster's will.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Care (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any tasks involving a trainer's ability to medicate, help with the recovery of or help injured monsters and other humans without the use of mana.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Fix (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task involving a trainer's ability with repairing tools and objects.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Question (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task that requires a trainer to formulate a line of questioning that extracts truth from an individual. It also determines how trustworthy the trainer finds the individual they are communicating with.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Recall (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task involving a trainer's ability to recall pieces of researched information. This skill is further divided into subtopics. Which will be later discussed.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Survive (Resilience)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task involving a trainer's ability to be able to find food, water and shelter in a hostile environment.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Deceive (Guile)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task that a trainer does in order to obfuscate their intentions or the truth about a topic they know.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Persuade (Guile)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task involving a trainer's ability to acquire favors, information or resources from other humans by using their social skills.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Tame (Guile)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task involving a trainer's ability to connect and communicate with monsters that aren't his own.
          </Typography>
        </Box>
      )
    },
    {
      title: 'Monster Only Skills',
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Monster Only Skills
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Handle (Agility)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task that requires a monster to handle manmade objects with care. Some monsters with high intelligence may use this skill to figure out what the object they are handling actually does.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Detect (Intelligence)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task that uses the unique sensory abilities monsters can have to find objects or other monsters. Usually most monsters are sensitive to other monsters or to objects with large deposits of magical energy.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command (Resilience)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task a monster may take that involves the leadership of other weaker monsters. Monsters usually respect longer lived and more physically healthy monsters and they follow the ones who look like they lived through a lot of experiences.
          </Typography>
          
          <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Showoff (Guile)</Typography>
          <Typography variant="body1" paragraph>
            This refers to any task where monsters can show off their bodies or abilities without orders or instructions from their trainers. Some monsters know that it's beneficial to endear themselves to humans and other monsters and will try to make an effort to woo them over.
          </Typography>
        </Box>
      )
    }
  ];

  const pages = [
    {
      title: 'The Basics',
      icon: <MenuBook />,
      hasSubsections: true,
      subsections: basicsSubsections,
      content: null
    },
    {
      title: 'Game Flow',
      icon: <Timeline />,
      hasSubsections: true,
      subsections: [
        {
          title: 'Skill Checks',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Skill Checks
              </Typography>
              
              <Typography variant="body1" paragraph>
                Whenever the GM asks a trainer or their monster to perform a failable but realistically succedible task, they perform a skill check. A GM will set the Difficulty Class (DC). Here is a guide on rating how hard a task is. A player or monster who exceeds the DC with their roll by a wide margin may receive a more dramatic success. A player or monster who fails the DC by a wide gap will similarly experience a harsher price for failure.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                DC Scaling
              </Typography>
              
              <Box sx={{ mt: 2, mb: 3 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>9 or below</Typography>
                <Typography variant="body1" paragraph>
                  A relatively easy task for a trainer. A monster who is untrained for this task might find it difficult.
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>10-12</Typography>
                <Typography variant="body1" paragraph>
                  A fairly challenging task for unspecialized trainers and most rookie monsters
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>13-16</Typography>
                <Typography variant="body1" paragraph>
                  A very challenging task for new trainers and monsters but only slightly difficult task for specialized trainers and well trained monsters
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>17-20</Typography>
                <Typography variant="body1" paragraph>
                  A difficult task but doable task for specialized trainers. Monsters have to be well trained in this skill area to succeed in this task as well.
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>21-24</Typography>
                <Typography variant="body1" paragraph>
                  Only specialized trainers can hope to succeed in this task without the use of luck. Only Monsters who are now specialized in this skill area will be able complete these tasks consistently
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>25-28</Typography>
                <Typography variant="body1" paragraph>
                  A task that cannot be completed within the realm of a trainer's capabilities. A trainer needs a well trained and specialized monster to be able even complete this task.
                </Typography>
                
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>29+</Typography>
                <Typography variant="body1" paragraph>
                  Even a powerful and well trained monster needs a bit of luck to complete these kinds of tasks.
                </Typography>
              </Box>
              
              <Typography variant="body1" paragraph>
                Once the DM sets the DC (they may or may not tell the player the exact number), a player or their monster must roll the following:
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                2d10 + stat score bonus + proficiency bonus (If the creature is proficient)
              </Typography>
              
              <Typography variant="body1" paragraph>
                A proficiency bonus is determined by adding half their stat score bonus to the roll. A trainer who has a specialization dice (1d6) can add its result to a skill check they have specialized in.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Stat Saves',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Stat Saves
              </Typography>
              
              <Typography variant="body1" paragraph>
                When a trainer or monster is affected by a harmful effect either stemming from a technique or environmental hazards and traps, a GM may call for a Stat Save. Similar to skill checks a GM may call a trainer or their monster to make skill saves. The DC however depends on the source of the save.
              </Typography>
              
              <Typography variant="body1" paragraph>
                The DC for environmental hazards or traps are set by the GM and follow the same DC scaling as the skill check table. Sometimes a monster's technique will call for a save to whatever monster or trainer it affects. This is called the monsters save DC.
              </Typography>
              
              <Typography variant="body1" paragraph>
                A monster has two Save DC's: their <strong>Physical save DC</strong> and their <strong>Magical Save DC</strong>.
              </Typography>
              
              <Typography variant="body1" paragraph>
                The Physical Save DC is equal to: <strong>10 + Attack Score Bonus + half their monster level rounded down</strong>
              </Typography>
              
              <Typography variant="body1" paragraph>
                A monster's Magical Save DC is equal to: <strong>10 + their Intelligence Score Bonus + half their monsters level rounded down</strong>
              </Typography>
              
              <Typography variant="body1" paragraph>
                A Stat Save can be used against the following 4 Stat scores: <strong>Endurance, Agility, Resilience and Guile</strong>. When the GM or techniques calls for players to Stat Save they use the appropriate bonuses for the stat in question.
              </Typography>
              
              <Typography variant="body1" paragraph>
                For a trainer or monster to resist the effects of Stat save they have to roll the following:
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                D20 + the appropriate stat score bonus + half of their trainer level or monster level
              </Typography>
            </Box>
          )
        },
        {
          title: 'Exerting Actions',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Exerting Actions
              </Typography>
              
              <Typography variant="body1" paragraph>
                When a trainer or monster desperately wants to succeed in a task they can Exert themselves. Exerting can be used in various ways in roleplay and some aspects of combat (which will be explained in the combat section).
              </Typography>
              
              <Typography variant="body1" paragraph>
                In aspects of roleplay a trainer or monster can exert themselves during a Skill check or a Stat save. Whenever a trainer or monster Exerts themselves in a certain task instead of rolling the d20 or the 2d10's with their stat score bonus they instead can replace a +1 stat score bonus with + 1d6 instead.
              </Typography>
              
              <Typography variant="body1" paragraph>
                When done so a trainer or monster can possibly get a higher result than what they normally could. However, once a stat score bonus is "exerted" that stat score bonus is temporarily deducted from their pool of stat score bonuses.
              </Typography>
              
              <Typography variant="body1" paragraph>
                A monster recovers 1 point deduction from all its stats during a break if its trainer uses 1 mana point. Both monster and trainer can recover from all their deductions during a rest. A trainer or monster cannot Exert multiple of their score points in one give check or save unless they have ability that states otherwise.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Example
              </Typography>
              <Typography variant="body1" paragraph>
                For example if a level 4 trainer is forced to make an Agility save, with an Agility score bonus is +2, They roll a d20+2. However if a trainer chooses to exert themselves for that roll, they now roll a d20+1+1d6. Until that trainer takes a rest their Agility score bonus is +1 instead of +2.
              </Typography>
              
            </Box>
          )
        },
        {
          title: 'Straining Loyalty',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Straining Loyalty
              </Typography>
              
              <Typography variant="body1" paragraph>
                Sometimes the trainer calls upon its monster to do a task that is beyond what it thinks it can do. Part of being a trainer is knowing when to push your monster past their limits so they can grow more powerful. A monster might not appreciate this at first however.
              </Typography>
              
              <Typography variant="body1" paragraph>
                When difficult situations arise and a monster is put to the test, a trainer can strain a monster's loyalty to complete a difficult test. Whenever a task or ability allows you to exert a monster, you can strain its loyalty instead. To do so a trainer can deduct one point from a monster loyalty score and then add 1d6 to the roll instead of the normal rules of exerting.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Doing so a monster's stat score bonus will not be reduced. For example if a monster exerted roll on a Detect skill check is 2d10+3+1d6, its strained loyalty skill check is 2d10+4+1d6. A monster will always follow a command that is straining its loyalty.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Advantage & Disadvantage',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Advantage and Disadvantage
              </Typography>
              
              <Typography variant="body1" paragraph>
                Certain abilities or situations may help or impede in the success of your rolls. These are called Advantage and Disadvantage. Advantages and Disadvantages can range from 1 to 5.
              </Typography>
              
              <Typography variant="body1" paragraph>
                When a roll is declared to have <strong>Advantage</strong>, the player adds a number of 1d6 equal to the level of advantage they have. When it is declared to have <strong>disadvantage</strong> the player subtracts a number of 1d6 equal to the roll they make instead.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Certain circumstances call for multiple sources of advantage and disadvantages. In these situations each level adds up to a maximum of 5. Given a situation where both advantage and disadvantage is applied, each level in advantage cancels out a level of disadvantage and vice versa.
              </Typography>
            </Box>
          )
        }
      ],
      content: null
    },
    {
      title: 'Monster Battles',
      icon: <Timeline />,
      hasSubsections: true,
      subsections: [
        {
          title: 'Battle Types & Turn Order',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Monster Battle
              </Typography>
              
              <Typography variant="body1" paragraph>
                Monster battle happens in rounds. Each round is a collection of all the turns of the trainers and monsters involved in the combat. A turn is a set of allowable actions that a trainer or monster can do per round. Their turn ends once they have exhausted all their possible actions or if they choose to pass it. A turn happens roughly six seconds of in-game time.
              </Typography>
              
              <Typography variant="body1" paragraph>
                There are two types of monster battles: <strong>Wild battles</strong> and <strong>sanctioned battles</strong>.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Sanctioned Battles
              </Typography>
              <Typography variant="body1" paragraph>
                Sanctioned battles are organized by the Monster Association in the form of tournaments or are agreements between the trainers. These can range from full contact duels, to arena battles or even obstacle courses and races. Monsters and trainers participating in these battles are not allowed to attack their opposing trainers and trainers are only allowed to command their monsters. Sanctioned battles also have special rules that prevent a monster from injuring each other too heavily: such as time limits or injury limits.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Wild Battles
              </Typography>
              <Typography variant="body1" paragraph>
                Wild battles are full contact battles that happen between trainers and their monsters against wild monsters. These battles are anything goes, survival scenarios where the enemy monster can attack the trainers directly. Most wild monsters will not stop until both the trainer and their monsters are fatally injured. Take caution when engaging in these kinds of battles.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Turn Order
              </Typography>
              <Typography variant="body1" paragraph>
                A player's position in turn order in Monster Battle is called Initiative and their Initiative is dependent on what type of battle the trainers are participating in.
              </Typography>
              
              <Typography variant="body1" paragraph>
                In a <strong>sanctioned battle</strong> trainer's and monsters take their turn simultaneously with the monsters executing the trainer's commands as soon as the trainer gives them. The trainer and monster share initiative here however only the trainer rolls their initiative not their monsters.
              </Typography>
              
              <Typography variant="body1" paragraph>
                In <strong>wild battles</strong>, a trainer and monster's initiative are separate with the monster following the trainer's command as soon as they start their turns. As long as the trainer and its monster are not caught off guard or if it's the second round of combat, a trainer can choose to take their turn directly before their monster's turn if they rolled a higher initiative roll. If a monster starts its turn before a trainer has given a command to its monster in this round or a previous round, it can make a loyalty check. On a pass it will now choose to take its turn directly after its trainer. On a fail the monster will use its own judgment and act according to its personality and its trained abilities.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                Trainer Initiative: 1d20 + Intelligence Score bonus + half their trainer level rounded down<br/>
                Monster Initiative: 1d20 + Agility Score bonus
              </Typography>
            </Box>
          )
        },
        {
          title: 'Turn Flow & Actions',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Turn Flow
              </Typography>
              
              <Typography variant="body1" paragraph>
                Turns can be broken down into the following set of options: <strong>Move</strong>, <strong>Full Action or Quick Actions</strong>, <strong>Free Actions</strong> and <strong>Reactions</strong>.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Move
              </Typography>
              <Typography variant="body1" paragraph>
                During their turns, trainers or monsters, they choose a form of movement. They can move up a distance less than or equal to their movement speed in that form of movement. A player or monster can break apart their movements to do quick actions or full actions in between their movement. A monster who has a trainer will not move from their position unless their trainer commands them otherwise or they are in direct harm of something.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Full Action
              </Typography>
              <Typography variant="body1" paragraph>
                A full action is a set of complex or more taxing maneuvers or activities that requires the full commitment of a trainer or monster's turn. A monster or trainer can only take one Full action a turn and they cannot take any quick action if they do so.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Quick Action
              </Typography>
              <Typography variant="body1" paragraph>
                A quick action refers to simple activities that are easy enough to perform or understand. A trainer or monster can take two Quick actions per turn and once they perform one quick action they cannot perform a Full action.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Free Action
              </Typography>
              <Typography variant="body1" paragraph>
                A free action can be anything that can be done offhandedly or its part of an ability that triggers automatically. A trainer or monster can perform any number of free actions per turn.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Reaction
              </Typography>
              <Typography variant="body1" paragraph>
                A reaction is a special action that can only be done in response to a set condition by either a rule, ability or command set by a trainer. Reactions can happen even during another trainer or monster's turn. Once per round a trainer can react to do the following once: attack, brace, a reaction granted by their trainer talent and command their monster. Once per round a monster can use their reaction to do the following once: use a technique, a reaction granted by one if its traits and brace.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Trainer Actions & Orders',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Trainer Actions
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Attack</Typography>
              <Typography variant="body1" paragraph>
                Your quick action to make an attack rolls against another creature with a simple technique you know.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Disengage</Typography>
              <Typography variant="body1" paragraph>
                You use quick action to prevent other creatures from hitting you with intercepting attacks until the start of your next turn.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Mount</Typography>
              <Typography variant="body1" paragraph>
                You use your quick action to ride a monster within 5ft of you. If it's a non-allied monster, you must make a ride skill check against the monster's Escape skill check. On the trainer's failure, they are knocked prone.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Order Monster</Typography>
              <Typography variant="body1" paragraph>
                You use your quick action to issue commands to your monster as long as you are within it general perception range. Any commands issued outside of their perception ranges must be made with a loyalty check with increasing difficulty the further the monster is. Commands are a set of actions that your monster follows that direct your monster how they will utilize their turn.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Use Tools</Typography>
              <Typography variant="body1" paragraph>
                You use your quick or full action, to use a trainer tool from your inventory.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Help</Typography>
              <Typography variant="body1" paragraph>
                You use your full action to do one of the following actions to another allied creature within 5ft of it: Give +1 advantage to skill check another creature if you are proficient in it. End the following status condition affecting another creature: Restrained, Prone.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Hide</Typography>
              <Typography variant="body1" paragraph>
                You use your quick action to make a Hide skill check. On a successful check you become hidden.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Dash</Typography>
              <Typography variant="body1" paragraph>
                You use your full action to double the amount of movement you can do until the end of your turn.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Return Monster</Typography>
              <Typography variant="body1" paragraph>
                You use your quick action to return your monster to its crystal.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Summon Monster</Typography>
              <Typography variant="body1" paragraph>
                You use your full action and mana point to summon your monster from its crystal.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Revive Monster</Typography>
              <Typography variant="body1" paragraph>
                You use your quick action and a mana point to wake up a monster you own from being fainted.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 4 }} color="secondary">
                Trainer Orders
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Simple Technique</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use one of their quick actions to perform a simple technique you named with this command. A monster cannot use the same technique in a single turn unless the technique, a trait or other factors say otherwise.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Complex Technique</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their full action to perform a complex technique you named with this command.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Dash</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use one of its movement options as a quick action aside from the one given as part of the Order Monster action.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Prepare</Typography>
              <Typography variant="body1" paragraph>
                When issuing this command, choose another command that can be done with one quick action. You will describe a situation to your GM, such as a hidden enemy appearing within 5 feet of your monster. Your monster will then skip its turn and if this situation is fulfilled your monster will then use one of its reactions to perform the commands.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Skill</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their quick action to perform a skill check. The type of skill used must be specified by the trainer.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Support</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their quick action to do one of the following actions to another allied creature within 5ft of it: Give +1 advantage to a skill check by another creature if your monster is proficient in it. End the following status condition affecting another creature: Restrained, Confused, Charmed or Prone.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Defend</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their quick action to move to do one of the following: It and an allied creature within 5ft of it do not gain penalties from taking the brace or perform command:brace action until the start of this monster's next turn. This monster's intercepting attack is changed to when a creature willingly enters within 5ft of it instead when a creature willingly moves away from it.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Retreat</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their full action to use up to two of their movement options to move towards its trainer. Any movement made by this monster does not provoke intercepting attacks.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Use Tool</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use an item that it currently possesses. Monster gear provided by the trainer will be used as per its description. For any other object it is holding, the Monster must pass a Handle skill check first to see if it will use it according to the intention of the trainer.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Hide</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their quick action to make a Hide skill check. On a successful check your monster becomes hidden.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Command: Ride</Typography>
              <Typography variant="body1" paragraph>
                A monster following this command will use their quick action to attempt to enter the space of a creature larger than it and hold on to that creature. If it's a hostile creature, it must make a Escape skill check against the hostile creature's Carry skill check.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Monster Actions',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Monster Actions
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Simple Technique</Typography>
              <Typography variant="body1" paragraph>
                A monster will use their quick action to perform a simple technique they know.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Complex Technique</Typography>
              <Typography variant="body1" paragraph>
                A monster will use their full action to perform a complex technique they know.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Monster Reactions
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Perform Command: Prepared</Typography>
              <Typography variant="body1" paragraph>
                A monster uses their reaction to perform your command: prepare.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Perform Command: Brace</Typography>
              <Typography variant="body1" paragraph>
                A monster uses their reaction to exert on their evasion for an attack or a saving throw they are about to take.
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 2 }}>Perform Command: Intercept</Typography>
              <Typography variant="body1" paragraph>
                A monster uses their reaction to perform an Intercepting Attack against a creature willingly moving 5 ft away from it.
              </Typography>
            </Box>
          )
        },
        {
          title: 'General Techniques',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                General Techniques
              </Typography>
              
              <Typography variant="body1" paragraph>
                <strong>Simple Technique - Grapple:</strong> This creature enters a grapple with another creature it can sense within 5ft of it.
              </Typography>
              
              <Typography variant="body1" paragraph>
                <strong>Simple Ranged Physical Technique - Throw:</strong> This creature throws an object it is holding to a target I can see within its sense range. On a hit this attack deals this creature's Agility score bonus as bludgeoning damage.
              </Typography>
              
              <Typography variant="body1" paragraph>
                <strong>Simple Technique Physical Melee - Take Down:</strong> This creature makes an unarmed melee attack against another creature within 5ft of it. On a hit this attack deals This creature strength bonus as bludgeoning damage.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                General Monster Techniques
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Simple Magical Ranged Technique - Essence Shot:</strong> This creature makes a ranged magical attack against a creature it can see within 20 ft of it. On a hit this attack deals This creature's intelligence bonus as piercing damage.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Combat Mechanics',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Landing Hits and Taking Hits
              </Typography>
              
              <Typography variant="body1" paragraph>
                During combat certain techniques call for attack rolls by either monsters or trainers. The type of attack roll is determined by the type of attack.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                Melee Attacks: d20 + Strength bonus + half monster essence level<br/>
                Ranged Physical: d20 + Agility bonus + half monster essence level<br/>
                Ranged Magic: d20 + Intelligence bonus + half monster essence level
              </Typography>
              
              <Typography variant="body1" paragraph>
                A monster's attack lands only if their total roll is greater or equal than the Physical Evasion or Magic Evasion of the target monster.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                Physical Evasion: 10 + Resilience bonus + Agility score bonus<br/>
                Magic Evasion: 10 + Guile bonus + Agility score bonus
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Critical Strikes
              </Typography>
              <Typography variant="body1" paragraph>
                When a monster performs an attack roll and rolls a value double that of a creature's Physical or Magic evasion, that attack roll is considered a <strong>Critical strike</strong>. A monster whose attack rolls a 20 on their d20, is called a <strong>Natural Critical strike</strong>. A Natural critical strike is an attack that hits the target monster even if the attacking monster's total roll is less than the defending monster's Physical or Magic Evasion.
              </Typography>
              
              <Typography variant="body1" paragraph>
                If a creature lands a natural critical strike, you may roll twice the amount of dice and take the highest results.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Exerting in Combat
              </Typography>
              <Typography variant="body1" paragraph>
                Much like skill checks and saves, both defending and attacking monsters can exert themselves to try and land a hit or to dodge an attack. Whenever a monster declares an attack roll they can also exert that attack roll. An exerted attack instead adds +1d6 in place of a +1 Strength or Intelligence score bonus. A monster can exert on only one Attack technique per round.
              </Typography>
              
              <Typography variant="body1" paragraph>
                A defending monster can also exert themselves from an incoming attack. Before an attacking monster declares the result of their attack roll, a defending monster can use their Brace reaction to exert and increase their Evasion by 1d6 in replacement of either their Agility score bonus, their Resilience or Guile Score bonus, possibly turning a hit into a miss. A defending creature can only do this once per round.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Trainer Combat
              </Typography>
              <Typography variant="body1" paragraph>
                Trainers are special cases. Since they don't normally engage in direct combat their attack rolls and evasion are slightly different. A trainer uses a d20+ their Strength score bonus for their physical attacks and uses their intelligence score bonus if they have any item that lets them replicate a magical technique. A trainer cannot land any form of critical hit on a monster unless it's a magical technique.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                Trainer Evasion: 8 + Resilience/Guile bonus + Agility score bonus
              </Typography>
              
              <Typography variant="body1" paragraph>
                However a trainer cannot exert their evasion when being hit by a monster unless they have special equipment to do so.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Damage & Status Effects',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Taking on Damage
              </Typography>
              
              <Typography variant="body1" paragraph>
                Whenever a creature lands an attack technique, an ability causes harmful effects or a creature falls victim to some dangerous environmental hazard, the affected creature takes damage. Whatever the cause maybe, when a monster or trainer takes damage that damage is deducted to a creature's total health pool.
              </Typography>
              
              <Typography variant="body1" paragraph>
                When a creature's health pool reaches zero they suffer a <strong>critical injury</strong>. They then regain health equal to a roll of their health die minus 1 of their health die. If a monster has lost their health and has no health to roll, they suffer a <strong>fatal injury</strong>.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Both a monster and trainer can partially recover their health if they choose to spend mana during a break. Both trainers and monsters recover all their health die and health points during a rest.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Damage Types
              </Typography>
              <Typography variant="body1" paragraph>
                There are multiple types of damages that can be inflicted upon a monster and trainer:
              </Typography>
              
              <Typography variant="body1" paragraph>
                <strong>Physical damage:</strong> slashing, piercing, bludgeoning, poison acid and blast damage.<br/>
                <strong>Magical damage:</strong> fire, electric, ice, radiant and dark damage.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Sometimes physical attack techniques infuse physical strikes with magical elemental damage while some magical effects may only employ physical damage types. Mix and matching damage types is a good idea as some Monsters can have resistances and immunity to certain damage types.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Resistances and Immunities
              </Typography>
              <Typography variant="body1" paragraph>
                Monsters can and to some extent trainers can get resistances or immunities from a certain damage type. A <strong>resistance</strong> from a damage type means that a defending creature only receives half damage from that damage type. While having a <strong>damage immunity</strong> means a creature receives no damage from that ability.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Attacks and effects against a monster with resistances still count as a hit but creatures with damage immunity always treat that attack or ability as a miss or a successful save.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Status Conditions
              </Typography>
              <Typography variant="body1" paragraph>
                Certain abilities or environmental effects may inflict something called a status condition to a monster or trainer. These status conditions vary in severity but all usually mean something negative is happening to the character. Each status condition is explained in the glossary.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Clearing status conditions is usually outlined either by the GM or the technique or ability the status effects originate from. Unless stated otherwise most status conditions can also be ended when a character takes a break or rest.
              </Typography>
            </Box>
          )
        },
        {
          title: 'Injuries',
          content: (
            <Box>
              <Typography variant="h4" gutterBottom>
                Critical and Fatal Injury
              </Typography>
              
              <Typography variant="body1" paragraph>
                For each time a monster's health points are depleted they are marked with a critical injury. Getting a critical injury mark always manifests as deducting a point from your monster's loyalty and deducting a health die they recover health from. Then that monster suffers an effect from a list that can be rolled using a d6.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontWeight: 'bold', textAlign: 'center', bgcolor: 'grey.100', p: 2, borderRadius: 1 }}>
                <strong>Critical Injury Effects (1d6):</strong><br/>
                1 - Monster faints and is unconscious until break/healing<br/>
                2 - Monster moves at half speed in one movement option<br/>
                3 - Monster temporarily cannot use techniques<br/>
                4 - Monster temporarily cannot benefit from a trait<br/>
                5 - Monster must make a loyalty check<br/>
                6 - Nothing happens to this monster
              </Typography>
              
              <Typography variant="body1" paragraph>
                Each time a monster is marked with a critical injury they roll an additional 1d6 and take the lower result. Each mark also subtracts a health die from their health pool until they take a rest.
              </Typography>
              
              <Typography variant="body1" paragraph>
                If a monster marked with a critical injury faints a number of times equal to more than half their total health die before they take a rest that monster takes a <strong>fatal injury</strong>. A monster always suffers a fatal injury if they have no more hit dice left.
              </Typography>
              
              <Typography variant="body1" paragraph>
                A monster may recover from the effects of a critical injury during a break if its trainer uses their mana to soothe an injury. That monster loses one of its critical injury marks and recovers one of their health die. Monsters recover from all injuries effects, recover all their hit dice and remove all critical injury marks without any cost during a rest.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
                Trainer Injuries
              </Typography>
              <Typography variant="body1" paragraph>
                Whenever a trainer takes a critical injury they almost always faint. At that point their monster, if conscious, must make a loyalty check to defend or even wake up their trainer. A trainer suffers a fatal injury if they have no more health dice to use or if they faint while the number of critical injury marks is more than their endurance stat bonus.
              </Typography>
              
              <Typography variant="body1" paragraph>
                A creature that receives a fatal injury is considered deceased and a player must make a new monster or trainer if they want to keep playing.
              </Typography>
            </Box>
          )
        }
      ],
      content: null
    },
    {
      title: 'Trainer Rules',
      icon: <Psychology />,
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Trainer Rules
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Trainer Classes
          </Typography>
          <Typography variant="body1" paragraph>
            Trainers can specialize in different approaches to monster training:
          </Typography>
          <Box component="ul" sx={{ ml: 3 }}>
            <Typography component="li" variant="body1"><strong>Beast Master</strong> - Focuses on bonding with wild creatures</Typography>
            <Typography component="li" variant="body1"><strong>Scholar</strong> - Studies monster behavior and abilities</Typography>
            <Typography component="li" variant="body1"><strong>Guardian</strong> - Protects monsters and maintains balance</Typography>
            <Typography component="li" variant="body1"><strong>Competitor</strong> - Trains monsters for tournaments and battles</Typography>
          </Box>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Monster Bonding
          </Typography>
          <Typography variant="body1" paragraph>
            Trainers form bonds with monsters through:
          </Typography>
          <Box component="ul" sx={{ ml: 3 }}>
            <Typography component="li" variant="body1">Spending time together during rest periods</Typography>
            <Typography component="li" variant="body1">Successful training sessions</Typography>
            <Typography component="li" variant="body1">Protecting the monster from harm</Typography>
            <Typography component="li" variant="body1">Providing favorite foods and care</Typography>
          </Box>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Training Actions
          </Typography>
          <Typography variant="body1" paragraph>
            During combat, trainers can use their action to:
          </Typography>
          <Box component="ul" sx={{ ml: 3 }}>
            <Typography component="li" variant="body1">Command a monster to take a specific action</Typography>
            <Typography component="li" variant="body1">Encourage a monster (grants advantage on next roll)</Typography>
            <Typography component="li" variant="body1">Recall a monster to safety</Typography>
            <Typography component="li" variant="body1">Use items or equipment</Typography>
          </Box>
        </Box>
      )
    },
    {
      title: 'Monster Rules',
      icon: <Pets />,
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Monster Rules
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Monster Types
          </Typography>
          <Typography variant="body1" paragraph>
            Monsters are categorized by their primary nature:
          </Typography>
          <Box component="ul" sx={{ ml: 3 }}>
            <Typography component="li" variant="body1"><strong>Elemental</strong> - Fire, Water, Earth, Air creatures</Typography>
            <Typography component="li" variant="body1"><strong>Beast</strong> - Natural animals with enhanced abilities</Typography>
            <Typography component="li" variant="body1"><strong>Spirit</strong> - Ethereal beings with magical powers</Typography>
            <Typography component="li" variant="body1"><strong>Construct</strong> - Artificial creatures made of various materials</Typography>
            <Typography component="li" variant="body1"><strong>Hybrid</strong> - Creatures combining multiple types</Typography>
          </Box>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Monster Abilities
          </Typography>
          <Typography variant="body1" paragraph>
            Each monster has unique abilities based on their type and individual nature:
          </Typography>
          <Box component="ul" sx={{ ml: 3 }}>
            <Typography component="li" variant="body1">Basic attacks (bite, claw, tackle, etc.)</Typography>
            <Typography component="li" variant="body1">Special abilities (elemental breath, healing, etc.)</Typography>
            <Typography component="li" variant="body1">Passive traits (night vision, flight, etc.)</Typography>
            <Typography component="li" variant="body1">Learned moves (taught by trainers)</Typography>
          </Box>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Monster Growth
          </Typography>
          <Typography variant="body1" paragraph>
            Monsters grow stronger through:
          </Typography>
          <Box component="ul" sx={{ ml: 3 }}>
            <Typography component="li" variant="body1">Gaining experience from battles and training</Typography>
            <Typography component="li" variant="body1">Forming stronger bonds with their trainer</Typography>
            <Typography component="li" variant="body1">Learning new abilities and techniques</Typography>
            <Typography component="li" variant="body1">Evolving into more powerful forms</Typography>
          </Box>
        </Box>
      )
    },
    {
      title: 'Glossary',
      icon: <LibraryBooks />,
      content: (
        <Box>
          <Typography variant="h4" gutterBottom>
            Glossary
          </Typography>
          
          <Typography variant="body1" paragraph>
            Key terms and definitions used in Monster Trainer TTRPG:
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom><strong>Ability Check</strong></Typography>
            <Typography variant="body1" paragraph>
              A d20 roll to determine if a character succeeds at a task, adding relevant ability modifiers.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Bond Level</strong></Typography>
            <Typography variant="body1" paragraph>
              The strength of connection between a trainer and their monster, affecting combat effectiveness.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Difficulty Class (DC)</strong></Typography>
            <Typography variant="body1" paragraph>
              The target number that must be met or exceeded on a d20 roll to succeed at a task.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Evolution</strong></Typography>
            <Typography variant="body1" paragraph>
              The process by which a monster transforms into a more powerful form.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Initiative</strong></Typography>
            <Typography variant="body1" paragraph>
              The order in which participants act during combat, determined by rolling 1d20 + Dexterity modifier.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Proficiency Bonus</strong></Typography>
            <Typography variant="body1" paragraph>
              A bonus added to rolls for skills and abilities a character is proficient in.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Saving Throw</strong></Typography>
            <Typography variant="body1" paragraph>
              A d20 roll made to resist or avoid harmful effects, using relevant ability modifiers.
            </Typography>
            
            <Typography variant="h6" gutterBottom><strong>Type Advantage</strong></Typography>
            <Typography variant="body1" paragraph>
              Combat bonuses gained when a monster's type is effective against an opponent's type.
            </Typography>
          </Box>
        </Box>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage === 0 && pages[0].hasSubsections) {
      if (currentBasicsSection < basicsSubsections.length - 1) {
        setCurrentBasicsSection(currentBasicsSection + 1);
        return;
      }
    }
    if (currentPage === 1 && pages[1].hasSubsections) {
      if (currentGameFlowSection < pages[1].subsections.length - 1) {
        setCurrentGameFlowSection(currentGameFlowSection + 1);
        return;
      }
    }
    if (currentPage === 2 && pages[2].hasSubsections) {
      if (currentMonsterBattlesSection < pages[2].subsections.length - 1) {
        setCurrentMonsterBattlesSection(currentMonsterBattlesSection + 1);
        return;
      }
    }
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      setCurrentBasicsSection(0);
      setCurrentGameFlowSection(0);
      setCurrentMonsterBattlesSection(0);
    }
  };

  const prevPage = () => {
    if (currentPage === 0 && pages[0].hasSubsections) {
      if (currentBasicsSection > 0) {
        setCurrentBasicsSection(currentBasicsSection - 1);
      }
    } else if (currentPage === 1 && pages[1].hasSubsections) {
      if (currentGameFlowSection > 0) {
        setCurrentGameFlowSection(currentGameFlowSection - 1);
      } else if (currentPage > 0) {
        setCurrentPage(0);
        setCurrentBasicsSection(basicsSubsections.length - 1);
      }
    } else if (currentPage === 2 && pages[2].hasSubsections) {
      if (currentMonsterBattlesSection > 0) {
        setCurrentMonsterBattlesSection(currentMonsterBattlesSection - 1);
      } else if (currentPage > 0) {
        setCurrentPage(1);
        setCurrentGameFlowSection(pages[1].subsections.length - 1);
      }
    } else if (currentPage > 0) {
      if (currentPage === 3 && pages[2].hasSubsections) {
        setCurrentPage(2);
        setCurrentMonsterBattlesSection(pages[2].subsections.length - 1);
      } else if (currentPage === 2 && pages[1].hasSubsections) {
        setCurrentPage(1);
        setCurrentGameFlowSection(pages[1].subsections.length - 1);
      } else if (currentPage === 1 && pages[0].hasSubsections) {
        setCurrentPage(0);
        setCurrentBasicsSection(basicsSubsections.length - 1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const nextBasicsSection = () => {
    if (currentBasicsSection < basicsSubsections.length - 1) {
      setCurrentBasicsSection(currentBasicsSection + 1);
    }
  };

  const prevBasicsSection = () => {
    if (currentBasicsSection > 0) {
      setCurrentBasicsSection(currentBasicsSection - 1);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Game Rules
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Comprehensive guide to Monster Trainer TTRPG mechanics
      </Typography>
      
      <Grid container spacing={3}>
        {/* Sidebar Navigation */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, position: 'sticky', top: 20, height: 'fit-content' }}>
            <Typography variant="h6" gutterBottom>
              Table of Contents
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {pages.map((page, index) => (
                <Box key={index}>
                  <ListItem
                    button
                    selected={currentPage === index && !page.hasSubsections}
                    onClick={() => {
                      setCurrentPage(index);
                      if (page.hasSubsections) {
                        if (index === 0) {
                          setCurrentBasicsSection(0);
                        } else if (index === 1) {
                          setCurrentGameFlowSection(0);
                        } else if (index === 2) {
                          setCurrentMonsterBattlesSection(0);
                        }
                      }
                    }}
                    sx={{
                      borderRadius: 1,
                      mb: page.hasSubsections ? 0.5 : 1,
                      '&.Mui-selected': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        }
                      }
                    }}
                  >
                    <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                      {React.cloneElement(page.icon, { 
                        sx: { 
                          fontSize: 20,
                          color: (currentPage === index && !page.hasSubsections) ? 'white' : theme.palette.primary.main
                        } 
                      })}
                    </Box>
                    <ListItemText 
                      primary={page.title}
                      primaryTypographyProps={{
                        fontSize: '0.9rem',
                        fontWeight: currentPage === index ? 600 : 400
                      }}
                    />
                  </ListItem>
                  
                  {/* Render subsections if this page has subsections and it's selected */}
                  {page.hasSubsections && currentPage === index && (
                    <Box sx={{ ml: 2, mb: 1 }}>
                      {page.subsections.map((subsection, subIndex) => (
                        <ListItem
                          key={subIndex}
                          button
                          selected={
                            index === 0 ? currentBasicsSection === subIndex :
                            index === 1 ? currentGameFlowSection === subIndex :
                            index === 2 ? currentMonsterBattlesSection === subIndex :
                            false
                          }
                          onClick={() => {
                            if (index === 0) {
                              setCurrentBasicsSection(subIndex);
                            } else if (index === 1) {
                              setCurrentGameFlowSection(subIndex);
                            } else if (index === 2) {
                              setCurrentMonsterBattlesSection(subIndex);
                            }
                          }}
                          sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            py: 0.5,
                            '&.Mui-selected': {
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              '&:hover': {
                                backgroundColor: theme.palette.secondary.dark,
                              }
                            }
                          }}
                        >
                          <ListItemText 
                            primary={subsection.title}
                            primaryTypographyProps={{
                              fontSize: '0.8rem',
                              fontWeight: (
                                index === 0 ? currentBasicsSection === subIndex :
                                index === 1 ? currentGameFlowSection === subIndex :
                                false
                              ) ? 600 : 400
                            }}
                          />
                        </ListItem>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </List>
          </Paper>
        </Grid>
        
        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 4, minHeight: '70vh' }}>
            {currentPage === 0 && pages[0].hasSubsections 
              ? basicsSubsections[currentBasicsSection].content 
              : currentPage === 1 && pages[1].hasSubsections
              ? pages[1].subsections[currentGameFlowSection].content
              : currentPage === 2 && pages[2].hasSubsections
              ? pages[2].subsections[currentMonsterBattlesSection].content
              : pages[currentPage].content}
            
            {/* Navigation Buttons */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mt: 6, 
              pt: 3, 
              borderTop: '1px solid #e0e0e0' 
            }}>
              <Button
                variant="outlined"
                startIcon={<ChevronLeft />}
                onClick={prevPage}
                disabled={currentPage === 0 && currentBasicsSection === 0}
                sx={{ minWidth: 120 }}
              >
                Previous
              </Button>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  {currentPage === 0 && pages[0].hasSubsections 
                    ? `${currentBasicsSection + 1} of ${basicsSubsections.length} (${pages[currentPage].title})`
                    : currentPage === 1 && pages[1].hasSubsections
                    ? `${currentGameFlowSection + 1} of ${pages[1].subsections.length} (${pages[currentPage].title})`
                    : currentPage === 2 && pages[2].hasSubsections
                    ? `${currentMonsterBattlesSection + 1} of ${pages[2].subsections.length} (${pages[currentPage].title})`
                    : `${currentPage + 1} of ${pages.length}`
                  }
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {currentPage === 0 && pages[0].hasSubsections 
                    ? basicsSubsections[currentBasicsSection].title
                    : currentPage === 1 && pages[1].hasSubsections
                    ? pages[1].subsections[currentGameFlowSection].title
                    : currentPage === 2 && pages[2].hasSubsections
                    ? pages[2].subsections[currentMonsterBattlesSection].title
                    : pages[currentPage].title
                  }
                </Typography>
              </Box>
              
              <Button
                variant="outlined"
                endIcon={<ChevronRight />}
                onClick={nextPage}
                disabled={
                  currentPage === pages.length - 1 && 
                  !(currentPage === 0 && currentBasicsSection < basicsSubsections.length - 1) &&
                  !(currentPage === 1 && currentGameFlowSection < pages[1].subsections.length - 1) &&
                  !(currentPage === 2 && currentMonsterBattlesSection < pages[2].subsections.length - 1)
                }
                sx={{ minWidth: 120 }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rules;
