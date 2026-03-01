import React, { useState } from 'react';
import './country.css'

const Country = ({ countryInfo, handleCountryName }) => {
    // console.log(countryInfo.name.common);
    // console.log(countryInfo.currencies.currencies);
    
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        console.log("visited");
        // setVisited(true);
        visited ? setVisited(false) : setVisited(true);
        handleCountryName(countryInfo)
    }
    
    
    

    return (
        <div className='country-box'>
            <img src={countryInfo.flags.flags.png} alt={countryInfo.flags.flags.alt} />
            <h3>Name:{countryInfo.name.common}</h3>
            <p>Area:{countryInfo.area.area}</p>
            
            <p>{(countryInfo.area.area > 300000) ? "Big Country" : "Small Country"}</p>

            <button className={`${visited && "visited-btn-style"}`} onClick={handleVisited} >
                {
                    visited ? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;