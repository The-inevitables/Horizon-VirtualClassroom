import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import digilibrary from './Components/digilibrary';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<Switch>
 <Route exact path="/" component={App}/>
 <Route exact path="/digilibrary" component={digilibrary} />
</Switch>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
