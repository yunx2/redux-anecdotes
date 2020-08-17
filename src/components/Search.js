import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setSearch } from '../reducers/searchReducer'

const Search = (props) => {

  const handleChange = event => {
    // input-field value is in variable event.target.value
    const value = event.target.value
    console.log('value:', value)
    props.setSearch(value)
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

const mapDispatchToProps = {
  setSearch
 }

const ConnectedSearch = connect(
  null,
  mapDispatchToProps
)(Search)

export default ConnectedSearch