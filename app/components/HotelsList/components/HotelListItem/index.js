import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HotelListItem from './HotelListItem';

export default connect(
  createStructuredSelector({
  })
)(HotelListItem);
