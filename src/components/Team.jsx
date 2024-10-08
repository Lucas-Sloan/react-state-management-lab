//src/components/Team.jsx

import React, { useState, } from 'react';
import '/src/App.css';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam((prevTeam) => {
        const newTeam = [...prevTeam, fighter];
        const newTotalStrength = newTeam.reduce((sum, f) => sum + f.strength, 0);
        const newTotalAgility = newTeam.reduce((sum, f) => sum + f.agility, 0);
        setTotalStrength(newTotalStrength);
        setTotalAgility(newTotalAgility);
        return newTeam;
      });
      setMoney(money - fighter.price);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (index) => {
    setTeam((prevTeam) => {
      const removedFighter = prevTeam[index];
      const newTeam = prevTeam.filter((_, i) => i !== index);
      const newTotalStrength = newTeam.reduce((sum, f) => sum + f.strength, 0);
      const newTotalAgility = newTeam.reduce((sum, f) => sum + f.agility, 0);
      setTotalStrength(newTotalStrength);
      setTotalAgility(newTotalAgility);
      setMoney(money + removedFighter.price); // Refund the price
      return newTeam;
    });
  };

  return (
<div className="team-container">
   <div className="team-section">
     <h1>Your Team</h1>
     <h2>Current Money: ${money}</h2>
     <h2>Total Team Strength: {totalStrength}</h2>
     <h2>Total Team Agility: {totalAgility}</h2>
     
     {team.length === 0 ? (
       <p>Pick some team members!</p>
     ) : (
       <div className="team-list-wrapper">
         <ul>
           {team.map((member, index) => (
             <li key={index}>
               <img src={member.img} alt={member.name} />
               <div>
                 <h3>{member.name}</h3>
                 <p>Price: ${member.price}</p>
                 <p>Strength: {member.strength}</p>
                 <p>Agility: {member.agility}</p>
               </div>
               <button onClick={() => handleRemoveFighter(index)}>Remove</button>
             </li>
           ))}
         </ul>
       </div>
     )}
   </div>
   
   <div className="available-fighters-section">
     <h2>Available Zombie Fighters</h2>
     <div className="fighters-list-wrapper">
       <ul>
         {zombieFighters.map((fighter, index) => (
           <li key={index}>
             <img src={fighter.img} alt={fighter.name} />
             <div>
               <h3>{fighter.name}</h3>
               <p>Price: ${fighter.price}</p>
               <p>Strength: {fighter.strength}</p>
               <p>Agility: {fighter.agility}</p>
             </div>
             <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
           </li>
         ))}
       </ul>
     </div>
   </div>
 </div>
  );
};

export default Team;