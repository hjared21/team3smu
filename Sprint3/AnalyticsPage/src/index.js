import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinContainer from './UXPinContainer.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinContainer />, document.getElementById("root"));