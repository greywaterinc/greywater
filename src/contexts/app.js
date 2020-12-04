import React, { useContext, useReducer } from "react"

const initialAppState = {
}

function appStateReducer(state, action) {
  switch(state) {
    default:
      return state
  }
}

const AppDispatchContext = React.createContext({})
const AppStateContext = React.createContext({})

export const useAppDispatch = () => useContext(AppDispatchContext);
export const useAppState = () => useContext(AppStateContext);

function AppProvider({ children }) {
  return (
    <AppDispatchContext.Provider>
      <AppStateContext.Provider>
        { children }
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export default AppProvider