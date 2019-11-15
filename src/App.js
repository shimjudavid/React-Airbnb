import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/layouts/Header';
import RentalList from './components/rentals/rental-listing/RentalList';
import GetRentalDetail from './components/rentals/rental-detail/GetRentalDetail';
import RentalState from './context/rentalContext/RentalState';

import './App.css';

function App() {
  return (
    <RentalState>
    <Router>
      <div >
      <Header />

          <div className='container'>
            <Switch>
              <Route exact path='/' component={RentalList} />
              <Route exact path='/rental' render={()=> <Redirect to='/' />}/>
              <Route exact path='/rental/:id/' component={GetRentalDetail} />


            </Switch>
          </div>

      </div>
      </Router>
      </RentalState>
  );
}

export default App;
