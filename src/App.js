import React from 'react';
import AppBar from './components/AppBar';
import { Container } from './components/styled-components';
import Home from './components/Home';

function App() {
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
