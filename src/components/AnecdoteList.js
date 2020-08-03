import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleVote, changeNotification, clearNotification }) => {
  const { id, votes, content } = anecdote
  const message = `you voted for "${content}"`
  const setNotification = str => {
    changeNotification(str)
    setTimeout(() => clearNotification(), 5000)
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

export const ConnectedAnecdote = connect(
  null,
  {
    changeNotification,
    clearNotification
  }
)(Anecdote)

const AnecdoteList = props => {
  const anecdotes = props.anecdotes
  const incrementVote = id => {
    props.vote(id)
  }
  return (
    <div>
      <h2>Current Anecdotes</h2>
      {console.log('store:', anecdotes)}
      <ul>
      {anecdotes.map(anecdote => {
        return (
          <ConnectedAnecdote
            anecdote={anecdote}
            handleVote={incrementVote} 
          />
        )})}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    anecdotes: state.anecdotes
  }
}
const mapDispatchToProps = {
  vote
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList