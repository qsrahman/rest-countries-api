import React from 'react'
import Wrapper from './style'

const DropDown = ({ region, searchByRegion }) => {
  const handleClick = e => {
    e.preventDefault()

    const pathname = e.target.pathname ? e.target.pathname.substring(1) : ''

    if (pathname) {
      if (pathname === region) {
        searchByRegion('')
      } else {
        searchByRegion(pathname)
      }
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
        <a
          className={region === 'africa' ? 'tick' : ''}
          href='africa'
          onClick={handleClick}>
          Africa
        </a>
        <a
          className={region === 'america' ? 'tick' : ''}
          href='america'
          onClick={handleClick}>
          America
        </a>
        <a
          className={region === 'asia' ? 'tick' : ''}
          href='asia'
          onClick={handleClick}>
          Asia
        </a>
        <a
          className={region === 'europe' ? 'tick' : ''}
          href='europe'
          onClick={handleClick}>
          Europe
        </a>
        <a
          className={region === 'oceania' ? 'tick' : ''}
          href='oceania'
          onClick={handleClick}>
          Oceania
        </a>
      </div>
    </Wrapper>
  )
}

export default DropDown
