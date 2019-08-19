import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Paginator extends React.Component {

  constructor() {
    super();
  }

  onPrevious=() =>{
    const { current, changePage } = this.props;
    if(current <= 1){
      return;
    }
    if (current > 1) {
      changePage(current - 1);
    }
  }

  onNext=()=> {
    const { current, total, changePage } = this.props;
    if(current === total){
      return;
    }
    if (current < total) {
      changePage(current + 1);
    }
  }

  render() {
    const { current, total } = this.props;


    return (
      <div
        className="paginator"
      > <div className="button"
      onClick={this.onPrevious}
    >
&lt;        </div>
        <div className="text">
          Page
        </div>
        <div >
          {current}
        </div>
        <div className="text">
            of {total}
        </div>

        <div className="button"

          onClick={this.onNext}
        >
        &gt;
        </div>
      </div>
    );
  }
}

Paginator.propTypes = {
  style: PropTypes.object,
  current: PropTypes.number,
  total: PropTypes.number,
  changePage: PropTypes.func
};

export default Paginator;

