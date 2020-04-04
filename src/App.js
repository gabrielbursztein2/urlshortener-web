import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'; 

import './App.css';
import { createUrl, getTopUrl, refreshShortUrl } from './actions/urlActions';
import UrlForm from './components/urlForm';
import ResultUrl from './components/resultUrl';
import TopUrl from './components/topUrl';

const App = props => {
  console.log(props);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopUrl());
  }, [dispatch]);

  const { shortUrl, createUrl, refreshShortUrl, topUrl } = props;

  return (
    <div className="App">
      {!shortUrl && <UrlForm handleSubmit={createUrl} />}
      {shortUrl && <ResultUrl shortUrl={shortUrl} refreshShortUrl={refreshShortUrl} />}
      <TopUrl topUrl={topUrl} />
    </div>
  );
}

const mapState = state => ({
  shortUrl: state.urlReducer.shortUrl,
  topUrl: state.urlReducer.topUrl
})

const mapDispatch = dispatch => ({
  createUrl: url => dispatch(createUrl(url)),
  refreshShortUrl: () => dispatch(refreshShortUrl())
});

export default connect(mapState, mapDispatch)(App);
