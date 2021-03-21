import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransectionHistory} from './components/TransactionHistory'
import {AddTransection} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'



function App() {
  return (
    <GlobalProvider>
            <Header /> 
        <div className="container"> 
            <Balance />
            <AccountSummary />
            <TransectionHistory />
            <AddTransection />
        </div>
    </GlobalProvider>
  );
}

export default App;