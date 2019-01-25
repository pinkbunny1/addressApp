import * as React from 'react';
import { Provider } from 'react-redux';

import configureStore from './reactStore'
import AppRouter from './router/AppRouter'

import { createEntry } from './modules/Add/actions'

import './styles/style.css'

const store = configureStore()

// creating starting data
store.dispatch(
  createEntry({
    firstname: 'Luke',
    lastname: 'Skywalker',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Skywalker',
    lastname: 'Luke',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Obi-Wan',
    lastname: 'Kenobi',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Han',
    lastname: 'Solo',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Leia',
    lastname: 'Organa',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Luke',
    lastname: 'Vader',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Darth',
    lastname: 'Vader',
  })
)
store.dispatch(
  createEntry({
    firstname: 'Master',
    lastname: 'Yoda',
  })
)

console.log(store.getState())

class App extends React.Component {
<<<<<<< HEAD
	render() {
		console.log(1, AppRouter)
		return (
			<Provider store={store}>
				<AppRouter />
			</Provider>
		);
	}
=======
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
>>>>>>> 3764c47c92d40da3eddac352b20b1deb6f90f5fd
}

export default App
