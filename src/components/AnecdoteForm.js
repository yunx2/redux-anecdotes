import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'
import { addNew } from '../services/anecdotes'

const AnecdoteForm = props => {
  const dispatch = useDispatch()
  const addAnecdote = e => {
    e.preventDefault()
    const anecdoteText = e.target.anecdote.value
    e.target.anecdote.value = ''
    dispatch(createAnecdote(anecdoteText))

    const message = `you added "${anecdoteText}"`
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