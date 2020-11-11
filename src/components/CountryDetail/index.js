import React from 'react'
import Wrapper from './style'

const CountryDetail = ({
  country,
  borders,
  handleClickBack,
  handleClickBorder,
}) => {
  return (
    <Wrapper flag={country.flag}>
      <button className='btn back-btn' onClick={handleClickBack}>
        <i className='fas fa-long-arrow-alt-left'></i>
        Back
      </button>
      <div className='detail-main'>
        <div className='flag-detail'>
          <img src={country.flag} alt={`Flag of ${country.name}`} />
        </div>
        <div className='detail-content'>
          <h2>{country.name}</h2>
          <div className='detail-lists'>
            <ul>
              <li>
                <strong>Native Name: </strong>
                <span>{country.nativeName}</span>
              </li>
              <li>
                <strong>Population: </strong>
                <span>{country.population.toLocaleString()}</span>
              </li>
              <li>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </li>
              <li>
                <strong>Sub Region: </strong>
                <span>{country.subregion}</span>
              </li>
              <li>
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </li>
            </ul>
            <ul>
              <li>
                <strong>Top Level Domain: </strong>
                <span>{country.topLevelDomain}</span>
              </li>
              <li>
                <strong>Currencies: </strong>
                {country.currencies.map((el, i, arr) => {
                  if (i === arr.length - 1) {
                    return <span key={el.name}>{el.name}</span>
                  } else {
                    return <span key={el.name}>{el.name}, </span>
                  }
                })}
              </li>
              <li>
                <strong>Languages: </strong>
                {country.languages
                  ? country.languages.map((el, i, arr) => {
                      if (i === arr.length - 1) {
                        return <span key={el.name}>{el.name}</span>
                      } else {
                        return <span key={el.name}>{el.name}, </span>
                      }
                    })
                  : ''}
              </li>
            </ul>
          </div>
          <div className='detail-borders'>
            <div>
              <strong>Border Countries:</strong>{' '}
            </div>
            <div className='borders'>
              {borders.map(el => {
                return (
                  <button
                    className='btn border-btn'
                    id={el.alpha3Code}
                    key={el.name}
                    onClick={e => handleClickBorder(e)}>
                    {el.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CountryDetail
