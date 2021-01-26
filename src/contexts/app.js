import React, { useContext, useReducer } from "react"

const initialAppState = {
  viewingTank: 'chemical',
  isTankPanelOpen: false,
  initializing: true,
  authenticated: false
}

function appStateReducer(state, action) {
  switch(action.type) {
    case 'openTankView':
      return {
        ...state,
        viewingTank: action.payload,
        isTankPanelOpen: true
      }
    case 'closeTankView':
      return {
        ...state,
        isTankPanelOpen: false
      }
    case 'setInitialized':
      return {
        ...state,
        initializing: false
      }
    case 'setAuthenticated':
      return {
        ...state,
        authenticated: true
      }
    default:
      return state
  }
}

const AppDispatchContext = React.createContext({})
const AppStateContext = React.createContext({})

export const useAppDispatch = () => useContext(AppDispatchContext);
export const useAppState = () => useContext(AppStateContext);

function AppProvider({ children }) {

  const [state, dispatch] = useReducer(appStateReducer, initialAppState)

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        { children }
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export default AppProvider