import React, { useEffect } from 'react'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import ConnectedSearch from './components/Search'
import { useDispatch } from 'react-redux'
import { initialize } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <ConnectedSearch />
      <ConnectedAnecdoteForm />
      <ConnectedAnecdoteList />
    </div>
  )
}
export default App