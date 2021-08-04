import React from 'react';
import SignIn from './pages/signin'
import Global from './style/global';
//import Toast from './components/Toast';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn/>
      </AppProvider>
      
      <Global/>
    </>
  );
}

export default App;
