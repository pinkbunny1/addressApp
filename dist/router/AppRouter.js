import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../modules/Home';
import EditPage from '../modules/Edit';
import AddPAge from '../modules/Add';
import HeaderCompo from '../components/Header';
var AppRouter = function () { return (React.createElement(Router, null,
    React.createElement("div", null,
        React.createElement(HeaderCompo, null),
        React.createElement("div", { className: "address" },
            React.createElement(Route, { component: HomePage }),
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, strict: true, sensitive: true, path: "/create", component: AddPAge }),
                React.createElement(Route, { exact: true, strcit: true, sensitive: true, path: "/edit/:id", component: EditPage })))))); };
export default AppRouter;
//# sourceMappingURL=AppRouter.js.map