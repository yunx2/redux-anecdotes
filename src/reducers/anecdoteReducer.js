const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
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

export const createAnecdote = anecdote => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(anecdote)
  }
}

const initialState = anecdotesAtStart.map(asObject) // looks like this: [{...},{...},{...},{...},{...},{...}]

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
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