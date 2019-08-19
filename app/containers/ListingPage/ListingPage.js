
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import HotelsList from 'components/HotelsList';
import './style.scss';

export default class ListingPage extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    //call the api here with the location in the global state
    this.changePage(1);
  }

  changePage=(pageNumber)=>{
    this.props.fetchHotels({filters: {},paginator:{current:pageNumber,total:0}});
  }

  render() {
    const {data,loading, error, listing, listingInfo}= this.props;
    return (
      <div className="feature-page">
         <Helmet>
          <title>{listingInfo.pageTitle || 'Hotels'} </title>
          <meta
            name="description"
            content="Hotels List"
          />
        </Helmet>
        <h1>{listingInfo.headlineTitle}</h1>
        <HotelsList changePage={this.changePage} data={data} loading={loading} error={error} listing={listing}/>
      </div>
    );
  }
}
