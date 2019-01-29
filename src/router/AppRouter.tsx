import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../modules/Home';
import EditPage from '../modules/Edit';
import AddPAge from '../modules/Add';
import HeaderCompo from '../components/Header';

const AppRouter = () => (
	<Router>
		<div>
			<HeaderCompo />
			<div className="address">
				<Route component={HomePage} />
				<Switch>
					<Route exact strict sensitive path="/create" component={AddPAge} />
					<Route exact strcit sensitive path="/edit/:id" component={EditPage} />
				</Switch>
			</div>
		</div>
	</Router>
);

export default AppRouter;
