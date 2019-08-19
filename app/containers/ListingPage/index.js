import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import ListingPage from './ListingPage';
import { makeSelectLoading,
  makeSelectHotelsError,
  makeSelectHotelsData,
  makeSelectHotels,
  makeSelectListingInfo } from './selectors';
import {fetchHotelsList} from './actions';
import reducer from './reducer';
import saga from './saga';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotels: (params)=>  dispatch(fetchHotelsList(params)),
  }
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectHotels(),
  loading:makeSelectLoading(),
  error: makeSelectHotelsError(),
  listing: makeSelectHotelsData(),
  listingInfo:makeSelectListingInfo()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'hotels', reducer });
const withSaga = injectSaga({ key: 'hotels', saga });

export default compose(withReducer, withSaga, withConnect)(ListingPage);
export { mapDispatchToProps };

