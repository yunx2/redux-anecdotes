import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  const dispatch = useDispatch()
  const addAnecdote = e => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    e.target.anecdote.value = ''
    const message = `you added "${anecdote}"`
    dispatch(createAnecdote(anecdote))
    dispatch(changeNotification(message))
    setTimeout(() => dispatch(clearNotification()), 5000)
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

export default AnecdoteForm