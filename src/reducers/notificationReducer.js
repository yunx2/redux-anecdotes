
const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_NOTIFICATION':
      const message = action.data.notification
      return message
    default:
      return state
  }
}

export const changeNotification = notification => {
  return {
    type: 'CHANGE_NOTIFICATION',
    data: { notification }
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}
export default notificationReducer