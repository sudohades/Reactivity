import React from 'react'
import './commonStyles.css'

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
    return (
    <div className="carousel-container">
        {card.map((card,idx) =>(
            <Card key={card.id} title={card.title} z-index={idx}/>
        ))}
        </div>
    )
}


export default SwitchCards;
