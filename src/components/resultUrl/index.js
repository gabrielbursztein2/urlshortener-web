import React from 'react';
import { string, func } from 'prop-types';
import Button from "react-bootstrap/Button";
import './styles.css';

const ResultUrl = ({ shortUrl, refreshShortUrl }) => (
  <div className="result-container">
    <p className="result-title">Success!</p>
    <a href={shortUrl} className="result-url">{shortUrl}</a>

    <Button variant="dark" onClick={refreshShortUrl}>Create another one</Button>
  </div>
);

ResultUrl.propTypes = {
  shortUrl: string,
  refreshShortUrl: func.isRequired
};

export default ResultUrl;
