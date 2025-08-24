import React from 'react';
import "./Blog.css";
import { useState} from 'react';
import { Link } from 'react-router-dom'

const cards =[
    {id: 1, title: "Card 1", url: "/blog/file1"},
    {id: 2, title: "Card 2", url: "/blog/file2"},
    {id: 3, title: "Card 3", url: "/blog/file3"},
    {id: 4, title: "Card 4", url: "/blog/file4"},
    {id: 5, title: "Card 5", url: "/blog/file5"},
    {id: 6, title: "Card 6", url: "/blog/file6"},
    {id: 7, title: "Card 7", url: "/blog/file7"},
    {id: 8, title: "Card 8", url: "/blog/file8"},
    {id: 9, title: "Card 9", url: "/blog/file9"},
    {id: 10, title: "Card 10", url: "/blog/file10"}
]

const Blog = () => {
    //keeping track of which card is visible
    const [currentIndex, setCurrentIndex] = useState(0);

    //navigation for back and forth functions
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-btn"> Prev </button>
                <div>
                    <Link to={cards[currentIndex].url}>{cards[currentIndex].title}</Link>
                </div>

            <button onClick={nextSlide} className="carousel-btn"> Next </button>

        </div>
        
    );

}





export default Blog;