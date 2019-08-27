import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import HotelListItem from './components/HotelListItem';
import Paginator from './components/Paginator/Paginator';

const HotelsList = ({
  loading, error, data, listing, changePage
}) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (error !== false) {
    return (<div>Something Went wrong!</div>);
  }

  if (data && data.length > 0) {
    return (
      <div>
        { data.map((hotel) =>
          <HotelListItem key={hotel.listingNumber} item={hotel}></HotelListItem>
        )}
      <Paginator changePage={changePage} total={listing.paginator.total} current={listing.paginator.current} />
      </div>
    );
  } else if (data && data.length === 0) {
    return <span>No record found!</span>;
  }
  return null;
};

HotelsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data:PropTypes.array,
  listing: PropTypes.object,
  changePage: PropTypes.func
};

export default HotelsList;
