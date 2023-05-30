// App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MerchantDashboardPage from './MerchantDashboardPage';
import UserRegistrationPage from './UserRegistrationPage';
import ProductListPage from './ProductListPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route
          path="/merchant-dashboard"
          component={MerchantDashboardPage}
        />
        <Route
          path="/user-registration"
          component={UserRegistrationPage}
        />
        <Route path="/product-list" component={ProductListPage} />
      </div>
    </Router>
  );
};

export default App;
