import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme, darkTheme } from './GlobalStyle'
import ToggleSwitch from './components/ToggleSwitch'
import Countries from './components/Countries'
import DropDown from './components/DropDown'
import Search from './components/Search'
import CountryDetail from './components/CountryDetail'
import { Header, Container, SearchBar } from './App.style'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [country, setCountry] = useState({})
  const [borders, setBorders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [toggleDetail, setToggleDetail] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setCountries(data)
        setFilteredCountries(data)
        setIsLoading(false)
      })
      .catch(error => console.log('Error:', error))
  }, [])

  const searchName = text => {
    setFilteredCountries(
      countries.filter(c => c.name.toLowerCase().includes(text.toLowerCase()))
    )
  }

  const searchByRegion = text => {
    setFilteredCountries(
      countries.filter(c => c.region.toLowerCase().includes(text.toLowerCase()))
    )
  }

  const findBorders = c => {
    const borderCountries = c.borders.map(b => {
      const found = countries.find(x => x.alpha3Code === b)
      return {
        name: found.name,
        alpha3Code: found.alpha3Code,
      }
    })

    return borderCountries
  }

  const handleClickOnACountry = e => {
    let alpha3Code = e.currentTarget.id
    const slectedCountry = countries.find(c => c.alpha3Code === alpha3Code)

    setCountry(slectedCountry)
    setBorders(findBorders(slectedCountry))
    setToggleDetail(true)
  }

  const handleClickBorder = e => {
    let alpha3Code = e.currentTarget.id
    const foundCountry = countries.find(c => c.alpha3Code === alpha3Code)

    setBorders(findBorders(foundCountry))
    setCountry(foundCountry)
  }

  const handleClickBack = () => {
    if (toggleDetail) {
      searchName('')
      return setToggleDetail(!toggleDetail)
    }
  }

  const toggleTheme = flag =>
    flag ? setTheme(darkTheme) : setTheme(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <div className='inner'>
          <h2>Where in the world</h2>
          <ToggleSwitch toggleTheme={toggleTheme} />
        </div>
      </Header>

      <Container>
        {!toggleDetail ? (
          <SearchBar>
            <Search searchName={searchName} />
            <DropDown searchByRegion={searchByRegion} />
          </SearchBar>
        ) : null}
        {isLoading ? (
          <h1 className='loading'>Loading...</h1>
        ) : !toggleDetail ? (
          <Countries
            countries={filteredCountries}
            handleClick={handleClickOnACountry}
          />
        ) : (
          <CountryDetail
            country={country}
            borders={borders}
            handleClickBack={handleClickBack}
            handleClickBorder={handleClickBorder}
          />
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
