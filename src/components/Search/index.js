import React from 'react'
import Wrapper from './style'

const Search = ({ searchName }) => {
  return (
    <Wrapper>
      <i className='fa fa-search'></i>
      <input
        type='text'
        className='search'
        onChange={e => searchName(e.target.value)}
        placeholder='Search for a country...'
      />
    </Wrapper>
  )
}

export default Search
