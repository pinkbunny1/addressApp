import { connect } from 'react-redux';
import { text_filter } from './actions';
import Header from './Header';
var mapStateToProps = function (state) { return ({
    filter: state.filter,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    textFilter: function (text) { return dispatch(text_filter(text)); },
}); };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=HeaderContainer.js.map