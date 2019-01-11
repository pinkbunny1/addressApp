import React from "react"
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux"

// import * as reducers from './oldReducers';// oldReducer
import rootReducer from "./reducers.js" // FF reducer
import AppRouter from "./router/AppRouter"

import { createEntry } from "./modules/Add/actions"

import "./styles/style.css"

const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) //FF reducer

// const store = createStore(combineReducers(reducers));// oldReducer

// creating starting data
store.dispatch(
  createEntry({
    firstname: "Luke",
    lastname: "Skywalker"
  })
)
store.dispatch(
  createEntry({
    firstname: "Skywalker",
    lastname: "Luke"
  })
)
store.dispatch(
  createEntry({
    firstname: "Obi-Wan",
    lastname: "Kenobi"
  })
)
store.dispatch(
  createEntry({
    firstname: "Han",
    lastname: "Solo"
  })
)
store.dispatch(
  createEntry({
    firstname: "Leia",
    lastname: "Organa"
  })
)
store.dispatch(
  createEntry({
    firstname: "Luke",
    lastname: "Vader"
  })
)
store.dispatch(
  createEntry({
    firstname: "Darth",
    lastname: "Vader"
  })
)
store.dispatch(
  createEntry({
    firstname: "Master",
    lastname: "Yoda"
  })
)

console.log(store.getState())

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App
