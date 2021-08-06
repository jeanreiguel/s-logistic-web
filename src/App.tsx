import React from 'react';
import SignIn from './pages/signin'
import Global from './style/global';
//import Toast from './components/Toast';
import Dashboard from './pages/Dashboard';
import AuthProvider from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
        
        <Global/>
      </Router>
    </>
  );
}

export default App;
