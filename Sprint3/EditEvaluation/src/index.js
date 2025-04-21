import React from 'react';
import { createRoot } from 'react-dom/client';
import UXPinCard from './UXPinCard.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<UXPinCard />, document.getElementById("root"));