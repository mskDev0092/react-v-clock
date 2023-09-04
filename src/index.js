import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import CountDownTimer from './countDownTimer.jsx';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CountDownTimer />
  </StrictMode>
);
