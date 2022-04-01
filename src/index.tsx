import { composeWithDevTools } from 'redux-devtools-extension'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import App from './components/app/app'
import { createAPI } from './services/api'
import { fetchData } from './store/api-actions'
import { reducer } from './store/reducer/reducer'

const api = createAPI()

const store: any = createStore(
	reducer(),
	composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
)

Promise.resolve(store.dispatch(fetchData()))
	.then(() => {
		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.getElementById('root')
		)
	})
	.catch(console.error)
