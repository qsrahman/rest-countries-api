import React from 'react'
import Wrapper from './style'

const Search = ({ searchTerm, searchByName }) => {
  return (
    <Wrapper>
      <i className='fa fa-search'></i>
      <input
        type='text'
        className='search'
        value={searchTerm}
        onChange={e => searchByName(e.target.value)}
        placeholder='Search for a country...'
      />
    </Wrapper>
  )
}

export default Search
