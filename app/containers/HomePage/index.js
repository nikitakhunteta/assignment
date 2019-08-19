import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './HomePage';
import { changeLocation  } from 'containers/App/actions';
import { makeSelectLocation  } from 'containers/App/selectors';

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchLocation: (location)=>dispatch(changeLocation(location))
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
