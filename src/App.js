import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/layouts/Header';
import RentalList from './components/rentals/rental-listing/RentalList';
import RentalDetail from './components/rentals/rental-detail/RentalDetail';

import RentalState from './context/rentalContext/RentalState';

import './App.css';

function App() {
  return (
    <RentalState>
    <Router>
      <div >
      <Header />
        <Switch>
          <div className='container'>
            <Route exact path='/' component={RentalList} />
            <Route exact path='/rental' render={()=> <Redirect to='/' />}/>
            <Route exact path='/rental/:id/' component={RentalDetail} />

          </div>
        </Switch>
      </div>
      </Router>
      </RentalState>
  );
}

export default App;
