import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <li>
      {anecdote.content}
      <div>
        has {anecdote.votes}
        <button onClick={() => handleVote(anecdote.id)}>vote</button>
      </div>
    </li>
  )
}

const AnecdoteList = props => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const incrementVote = id => {
    dispatch(vote(id))
  }
  return (
    <div>
      <h2>Current Anecdotes</h2>
      {console.log('store:', anecdotes)}
      <ul>
      {anecdotes.map(anecdote => {
        return (
          <Anecdote
            anecdote={anecdote}
            handleVote={incrementVote} 
          />
        )})}
      </ul>
    </div>
  )
}

export default AnecdoteList