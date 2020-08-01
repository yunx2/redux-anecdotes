import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVote }) => {
  const dispatch = useDispatch()
  const { id, votes, content } = anecdote
  const message = `you voted for "${content}"`
  const setNotification = str => {
    dispatch(changeNotification(str))
  }

  return (
    <li>
      {content}
      <div>
        has {votes}
        <button onClick={() => {
          handleVote(id)
          setNotification(message)
        }}>vote</button>
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