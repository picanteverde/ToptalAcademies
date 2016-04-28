import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
//import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <LogMonitor theme='tomorrow' />
);

export default DevTools;
