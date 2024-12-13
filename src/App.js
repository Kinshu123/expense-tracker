

import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Orb from './Components/Orb/Orb';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Auth/Signup';
import LoginPage from './Components/Auth/LoginPage';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Navigation from './Components/Navigation/Navigation';
import Expenses from './Components/Expenses/Expenses';
import Income from './Components/Income/Income';
import PaymentForm from './Components/PaymentForm';
import PaymentList from './Components/PaymentList';

const App = () => {
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const AppStyled = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
`;
const Content = styled.div`
  flex: 1;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex: 1;
`;
  const DashboardWithNavigation = () => {
    return (
      <DashboardContainer>
        <Navigation />
        <Content>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/income' element={<Income />} />
            <Route path='/expense' element={<Expenses />} />
            <Route path='/payment' element={<PaymentForm />} />
          </Routes>
        </Content>
      </DashboardContainer>
    );
  };


  return (
    <div className='overflow-hidden'>
      <AppStyled>
        {orbMemo}
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard/*' element={<DashboardWithNavigation />} />
            <Route path='/payment-list' element={<PaymentList />} />
          </Routes>
        </Router>
      </AppStyled>
    </div>
  );
};



export default App;
