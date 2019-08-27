/*
 * Landing page
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends React.Component {
  handleFormSubmit = () => {
    const { history, location } = this.props;
    history.push({
      pathname: `/listing/${location}`,
    });
  }

  onLocationValueChanged = (evt) => {
    const {
      onChangeSearchLocation
    } = this.props;
    onChangeSearchLocation(evt.target.value);
  }

  render() {
    const {
      location
    } = this.props;


    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HomeAway homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h4>
              Book holiday homes worldwide....
            </h4>
          </section>
          <section className="centered">

            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                <input
                  id="location"
                  type="text"
                  placeholder="Search for homes in..."
                  value={location}
                  onChange={this.onLocationValueChanged}
                />
              </label>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.string,
  onChangeSearchLocation: PropTypes.func,
  history: PropTypes.any
};
