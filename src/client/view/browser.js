/* global document */

import React from 'react';
import ReactDom from 'react-dom';
import App from './index';
import '../styles/_core.scss';

if (typeof window !== 'undefined') {
  ReactDom.render(<App />, document.getElementById('root'));
}

