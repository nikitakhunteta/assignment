/**
 * HotelListItem
 */

import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatingComponent from 'react-star-rating-component';
import './style.scss';

const HotelListItem = ({ item }) => (
  <Container key={item.listingNumber}>
    <Row>
      <Col>
        <Carousel autoPlay>
          {
            item.images.map((image) => (
              <div key={image.c6_uri}>
                <img src={image.c6_uri} alt={image.alt} />
              </div>
            )
            )
          }
        </Carousel>
      </Col>
      <Col>
        <span className="headline">{item.propertyMetadata.headline}</span>
      </Col>
      <Col>
        <span> {item.averageRating && <StarRatingComponent name={`StarRatingComponent_${item.listingNumber}`} starCount={5} value={item.averageRating} /> }  {item.reviewCount ? `${item.reviewCount} reviews` : ''}
        </span>
      </Col>
      <Col>
        <span className="propertyType"> {item.propertyType}</span>
      </Col>
      <Col>
        <span className="detailsProp">Sleeps: </span><span> {item.sleeps}</span>
      </Col>
      <Col>
        <span className="detailsProp">Bedrooms:  </span><span>{item.bedrooms}</span>
      </Col>
      {item.bathrooms && <Col><span className="detailsProp">Bathrooms:  </span><span>{item.bathrooms.full > 0 ? `${item.bathrooms.full} Full` : ''} {item.bathrooms.toiletOnly > 0 ? `${item.bathrooms.toiletOnly} Toilet Only` : ''}</span> </Col>}
      <Col>
        <span className="detailsProp">Pets:  </span><span> {item.petsAllowed ? 'Allowed' : 'Not allowed'}</span>
      </Col>
      {item.averagePrice && <Col><span className="detailsProp">Price:  </span><span> {item.averagePrice.value} {item.averagePrice.currencyUnits} {item.averagePrice.periodType}</span></Col>}
    </Row>
  </Container>
);

HotelListItem.propTypes = {
  item: PropTypes.object,
};

export default HotelListItem;
