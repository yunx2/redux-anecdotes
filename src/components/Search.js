import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { search } from '../reducers/searchReducer'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const value = event.target.value
    console.log('value:', value)
    setSearchTerm(value)
    console.log('search term', searchTerm)
    dispatch(search(searchTerm))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
export default Search