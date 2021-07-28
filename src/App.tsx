import React from 'react';
import SignIn from './pages/signin'
import Global from './style/global';
import { AuthProvider } from './context/AuthContext'

const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
      <SignIn/>
    </AuthProvider>
      <Global/>
    </>
  );
}

export default App;
