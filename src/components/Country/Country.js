import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, region, area, flags } = props.country;
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;