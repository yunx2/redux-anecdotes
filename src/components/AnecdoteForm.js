import React, { useState} from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, changeNotification, clearNotification }) => {
  const [timerId, setTimerId] = useState(null)

  const addAnecdote = e => {
    e.preventDefault()
    const anecdoteText = e.target.anecdote.value
    e.target.anecdote.value = ''
    createAnecdote(anecdoteText)

    const message = `you added "${anecdoteText}"`
    clearTimeout(timerId)
    changeNotification(message)
    setTimerId(setTimeout(() => clearNotification(), 5000))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createAnecdote,
  changeNotification,
  clearNotification
}


const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm