import React, {useState} from 'react';

import './Loading.scss';

function Loading({white, tiny}) {
  const className = `LoadingFullscreen ${white ? 'white' : ''} ${tiny ? 'tiny' : ''}`;
  return <div className={className}>
    <i className="material-icons">favorite</i>
    <p>Loading</p>
  </div>;
}

export default Loading;