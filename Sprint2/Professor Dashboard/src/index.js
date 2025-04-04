import React from 'react';
import { createRoot } from 'react-dom/client';
import HtmlElement from './HtmlElement.jsx';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HtmlElement />, document.getElementById("root"));