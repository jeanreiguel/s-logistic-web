import React from 'react';
import SignIn from './pages/signin'
import SignUp from './pages/signup';
import Global from './style/global';

const App: React.FC = () => {
  return (
    <>
      <SignUp/>
      <Global/>
    </>
  );
}

export default App;
