import React from 'react';


let RandomBox =() =>{

    let colors = ['red', 'blue', 'green', 'purple', 'pink'];
    

    let random_color = colors[Math.floor(Math.random() * colors.length)];
    let random_fontSize = Math.floor(20 * Math.random()) + 20;

    return (
        <div style={{display: 'inline-block',color: 'white',padding:'1rem',margin: '2rem',backgroundColor:`${random_color}`,fontSize:`${random_fontSize}px`}}>
            <h2>Random Box</h2>          
        </div>
    );
};

export default RandomBox;