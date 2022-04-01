import React from 'react'
import PageMain from '../page-main/page-main'
import PageCatalog from '../page-catalog/page-catalog'
import { AppClient } from '../../const/const'
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom'
import browserHistory from '../../browser-history'
import '../../index.scss'

const App = () => {
	return (
		<BrowserRouter history={browserHistory}>
			<Switch>
				<Route exact path={AppClient.ROOT} component={PageMain} />
				<Route exact path={AppClient.CATALOG} render={() => <PageCatalog />} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
