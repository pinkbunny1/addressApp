import { connect } from 'react-redux'
import { text_filter } from './actions'
import Header from './Header'
import { Dispatch } from 'redux'
import Types from 'Types'

const mapStateToProps = (state:Types.RootState) => ({
  filter: state.filter, //feature-first reducer
  // filter: state.addressfilter, //oldReducer
})

const mapDispatchToProps = (dispatch:Dispatch) => ({
  textFilter: (text:string) => dispatch(text_filter(text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
