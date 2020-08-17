import React from 'react'
import { connect } from 'react-redux'
import { vote, setSearchResults } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'
import searchReducer from '../reducers/searchReducer'

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
  const incrementVote = id => {
    props.vote(id)
  }
  return (
    <div>
      <h2>Current Anecdotes</h2>
      {console.log('store:', props.anecdotes)}
      <ul>
      {props.anecdotes.map(anecdote => {
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
  const searchResults = state.anecdotes.filter(current =>
    current.content.includes(state.searchTerm))
  return {
    anecdotes: (state.searchTerm ? searchResults : state.anecdotes )
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