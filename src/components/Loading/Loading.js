import React, {useState} from 'react';

import './Loading.scss';

function Loading({white}) {
  const className = white ? "LoadingFullscreen white" : "LoadingFullscreen";
  return <div className={className}>
    <i className="material-icons">favorite</i>
    <p>Loading</p>
  </div>;
}

export default Loading;