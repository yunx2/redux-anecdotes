import { getAll, addNew, updateAnecdote } from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdoteText) => {
  return {
    content: anecdoteText,
    id: getId(),
    votes: 0
  }
}

export const vote = id => {
  return async dispatch => {
    const updatedAnecdote = await updateAnecdote(id)
    dispatch({
      type: 'INCREMENT_VOTE',
      data: updatedAnecdote
    })
  }
}

export const setSearchResults = results => {
  return {
    type: 'SET_SEARCH_RESULTS',
    data: results
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
      const updated = action.data
      const updatedStore = state.map(obj => 
        obj.id !== updated.id ? obj :
        updated)
      return updatedStore
    case 'NEW_ANECDOTE':
      console.log('action:', action.type)
      const newAnecdoteObj = action.data
      const updatedAnecdotes = [...state, newAnecdoteObj]
      return updatedAnecdotes
    case 'SET_SEARCH_RESULTS': 
        const results = action.data
        return results
    default:
      return state
  }
}

export default anecdoteReducer