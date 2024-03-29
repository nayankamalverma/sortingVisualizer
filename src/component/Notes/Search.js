import React from 'react'
import { MdSearch } from 'react-icons/md'

function Search({handleSearchNote}) {
  return (
    <div className='note_search'>
        <MdSearch className='note_search-icon' size='1.3em' />
        <input 
          onChange = {(event) => handleSearchNote(event.target.value)}
          type='text' 
          placeholder='type to search' 
        />
    </div>
  )
}

export default Search