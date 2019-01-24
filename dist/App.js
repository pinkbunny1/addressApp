var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import * as reducers from './oldReducers';// oldReducer
import rootReducer from './reducers.js'; // FF reducer
import AppRouter from './router/AppRouter';
import { createEntry } from './modules/Add/actions';
import './styles/style.css';
var store = createStore(rootReducer); //FF reducer
// creating starting data
store.dispatch(createEntry({
    firstname: 'Luke',
    lastname: 'Skywalker',
}));
store.dispatch(createEntry({
    firstname: 'Skywalker',
    lastname: 'Luke',
}));
store.dispatch(createEntry({
    firstname: 'Obi-Wan',
    lastname: 'Kenobi',
}));
store.dispatch(createEntry({
    firstname: 'Han',
    lastname: 'Solo',
}));
store.dispatch(createEntry({
    firstname: 'Leia',
    lastname: 'Organa',
}));
store.dispatch(createEntry({
    firstname: 'Luke',
    lastname: 'Vader',
}));
store.dispatch(createEntry({
    firstname: 'Darth',
    lastname: 'Vader',
}));
store.dispatch(createEntry({
    firstname: 'Master',
    lastname: 'Yoda',
}));
console.log(store.getState());
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Provider, { store: store },
            React.createElement(AppRouter, null)));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map