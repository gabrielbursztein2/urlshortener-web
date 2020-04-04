import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const ResultUrl = ({ shortUrl }) => {
  if (shortUrl) {
    return (
      <div>
        <p>{shortUrl}</p>
      </div>
    );
  } else {
    return <></>
  }
}

ResultUrl.propTypes = {
  shortUrl: string,
};

const mapState = state => ({
  shortUrl: state.urlReducer.shortUrl
})

export default connect(mapState, null)(ResultUrl);
