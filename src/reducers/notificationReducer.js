const initialValue = 'attention attention attention'
const notificationReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return 
    default:
      return state
  }
}

export const setNotification = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}
export default notificationReducer