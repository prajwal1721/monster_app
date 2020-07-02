import React from 'react';
import './card.css'

export const Card = props=>{
    // console.log(props)
    return(
        <div className='card'>
            <img src={`https://robohash.org/${props.children.id}?set=set2&size=180x180`} alt={props.children.id}/>
            <h4>{props.children.name}</h4>
            <p>{props.children.email}</p>
        </div>
    );
}