import React from 'react'
import { Wrapper, Country } from './style'

const Countries = ({ countries, handleClick }) => {
  return (
    <Wrapper>
      {countries.map((country, idx) => (
        <Country key={idx}>
          <div
            className='flag'
            id={country.alpha3Code}
            onClick={e => handleClick(e)}>
            <img src={country.flag} alt={`Flag of ${country.name}`} />
          </div>
          <div className='info'>
            <h3>{country.name}</h3>
            <p className='type'>
              Population:
              <span className='value'>
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className='type'>
              Region:<span className='value'>{country.region}</span>
            </p>
            <p className='type'>
              Capital:<span className='value'>{country.capital}</span>
            </p>
          </div>
        </Country>
      ))}
    </Wrapper>
  )
}

export default Countries
