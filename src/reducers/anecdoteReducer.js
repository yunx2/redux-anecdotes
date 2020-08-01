import { getAll, addNew } from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdoteText) => {
  return {
    content: anecdoteText,
    id: getId(),
    votes: 0
  }
}

export const vote = id => {
  return {
    type: 'INCREMENT_VOTE',
    data: { id }
  }
}

export const createAnecdote = anecdoteText => {
  return async dispatch => {
    const newAnecdoteObject = await addNew(anecdoteText)
    dispatch({ 
      type: 'NEW_ANECDOTE',
      data: newAnecdoteObject
    })
  }
}

export const initialize = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'INCREMENT_VOTE':
      console.log('action:', action.type)
      const anecdoteId = action.data.id
      const foundAnecdote = state.find(obj => obj.id === anecdoteId)
      console.log(foundAnecdote)
      const updatedAnecdote = {
        ...foundAnecdote,
        votes: foundAnecdote.votes + 1
      }
      const updatedStore = state.map(obj => 
        obj.id !== anecdoteId ? obj :
        updatedAnecdote)
      return updatedStore
    case 'NEW_ANECDOTE':
      console.log('action:', action.type)
      const newAnecdoteObj = action.data
      const updatedAnecdotes = [...state, newAnecdoteObj]
      return updatedAnecdotes
    default:
      return state
  }
}

export default anecdoteReducer