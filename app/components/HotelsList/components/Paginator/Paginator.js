import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Paginator = ({ current, total, changePage }) => {
  const onPrevious = () => {
    if (current <= 1) {
      return;
    }
    if (current > 1) {
      changePage(current - 1);
    }
  };

  const onNext = () => {
    if (current === total) {
      return;
    }
    if (current < total) {
      changePage(current + 1);
    }
  };

  return (
    <div className="paginator">
      <button type="button" className="button" onClick={onPrevious}>
        &lt;
      </button>
      <div className="text">
        Page
      </div>
      <div>
        {current}
      </div>
      <div className="text">
          of {total}
      </div>
      <button type="button" className="button" onClick={onNext}>
        &gt;
      </button>
    </div>
  );
};

Paginator.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  changePage: PropTypes.func
};

export default Paginator;
