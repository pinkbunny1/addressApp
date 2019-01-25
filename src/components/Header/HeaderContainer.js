import { connect } from 'react-redux'
import { text_filter } from './actions'
import Header from './Header'

const mapStateToProps = state => ({
  filter: state.filter, //feature-first reducer
  // filter: state.addressfilter, //oldReducer
})

const mapDispatchToProps = dispatch => ({
  textFilter: text => dispatch(text_filter(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
