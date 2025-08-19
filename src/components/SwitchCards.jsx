import React from 'react'
import { useState } from 'react';
import './commonStyles.css'
import { motion } from 'framer-motion';


const card =  [
    {id: 1, title: "Linux news"},
    {id: 2, title: "Cybernews"},
    {id: 3, title: "AI advancements"},
    {id: 4, title: "Web Development"},
    {id: 5, title: "Cloud Computing"},
    {id: 6, title: "DevOps"},
];
function Card({ title }){
    return <div className="carousel-card">{title}</div>
}

function SwitchCards() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="carousel-container" onClick={() => setExpanded(!expanded)}>
      {card.map((card, idx) => (
        <motion.div
          key={card.id}
          className="carousel-card"
          initial={false}
          animate={{
            x: expanded ? idx * 100 + '%' : 0,
            opacity: expanded || idx === 0 ? 1 : 0,
            zIndex: expanded ? 1 : card.length - idx,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {card.title}
        </motion.div>
      ))}
    </div>
  );
}


export default SwitchCards;
