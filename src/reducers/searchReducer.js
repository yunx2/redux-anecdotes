
const searchReducer = (state = '', action) => { // returns an array anecdote objects filtered by searchTerm
  switch (action.type) {
    case "SET_SEARCHTERM":
      return action.data
      default:
        return state
  }
}

export const setSearch = searchTerm => {
  return {
    type: "SET_SEARCHTERM",
    data: searchTerm
  }
}

export default searchReducer