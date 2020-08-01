import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data 
}

export const addNew = async anecdoteText => {
  const anecdoteObj = asObject(anecdoteText)
  const response = await axios.post(baseUrl, anecdoteObj)
  return response.data // the record added to db
}
