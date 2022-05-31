import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card_body">
                <img src={props.img}/>
                <h2 className="card_title">{props.value}</h2>
                <p className="card_description">{props.description}</p>
            </div>
            <button className="card_btn">View More</button>
        </div>
    );
}

export default Card;