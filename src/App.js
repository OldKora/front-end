import React, { useEffect } from 'react';
import AppBar from './components/AppBar';
import { Container } from './components/styled-components';
import Home from './components/Home';
import { auth } from './lib/firebase';

function App() {
  useEffect(() => {
    auth.signInAnonymously().catch(err => {
      console.error(err.code, err.message);
    })
  }, [])
  return (
    <div className="App">
      <AppBar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
