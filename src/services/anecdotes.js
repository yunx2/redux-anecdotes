import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data 
}

const getById = async id => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export const updateAnecdote = async id => {
  const anecdote = await getById(id)
  const updatedAnecdote = {
    ...anecdote, 
    votes: anecdote.votes + 1
  }
  const res = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return res.data
} 

export const addNew = async anecdoteText => {
  const anecdoteObj = asObject(anecdoteText)
  const response = await axios.post(baseUrl, anecdoteObj)
  return response.data // the record added to db
}
