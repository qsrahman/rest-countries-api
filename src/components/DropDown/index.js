import React from 'react'
import Wrapper from './style'

const DropDown = ({ searchByRegion }) => {
  const handleClick = e => {
    e.preventDefault()

    if (e.target.pathname) {
      searchByRegion(e.target.pathname.substring(1))
    } else {
      searchByRegion('')
    }
  }

  return (
    <Wrapper>
      <button onClick={handleClick}>
        Filter by Region <i className='fa fa-caret-down'></i>
      </button>
      <div className='dropdown-menu'>
        <a href='africa' onClick={handleClick}>
          Africa
        </a>
        <a href='america' onClick={handleClick}>
          America
        </a>
        <a href='asia' onClick={handleClick}>
          Asia
        </a>
        <a href='europe' onClick={handleClick}>
          Europe
        </a>
        <a href='oceania' onClick={handleClick}>
          Oceania
        </a>
      </div>
    </Wrapper>
  )
}

export default DropDown
