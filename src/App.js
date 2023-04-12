import React from 'react';
import './layout/App.css';
import './layout/Articles.css';
import './layout/Services.css';
import './layout/Article.only.css';
import './layout/About.css';
import './layout/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routing from './routes/Routes';

export default function App() {
    return (
    <Routing />
   );
};

