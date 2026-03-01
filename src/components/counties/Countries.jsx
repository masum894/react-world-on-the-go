import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'




const Countries = ({ promiseOfCountries }) => {
    const allCountries = use(promiseOfCountries);
    const allCountriesData = allCountries.countries;
    // console.log(allCountriesData);

    const [countryName, setCountryName] = useState([]);
    const handleCountryName = (countryInfo) => {
        console.log("Country Name Called", countryInfo.name.common);
        const nameOfCountry = [...countryName, countryInfo]
        

        setCountryName(nameOfCountry);

    }

    return (
        <div>
            <h2>In the countries : {allCountriesData.length}</h2>

            <h4>Visited Country: <ol>
                {countryName.map(everyCountry=> <li>{everyCountry.name.common}</li>)}
                </ol> </h4>

            <div className='main-box'>
                {
                    allCountriesData.map(countryInfo => <Country key={countryInfo.ccn3.ccn3}
                        countryInfo={countryInfo}
                        handleCountryName={handleCountryName}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;