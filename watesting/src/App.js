import React, { useState } from 'react';
import styled from 'styled-components';

// components
import Dashboard from './components/Dashboard';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .controls {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-evenly;
  }
`;

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [atBat, setAtBat] = useState(0);
  const [hit, setHit] = useState(0);

  return (
    <Container>
      <h1>Baseball</h1>
      <p>Strikes: {strikes}</p>
      <p>Balls: {balls}</p>
      <p>Fouls: {fouls}</p>
      <p>At Bat: {atBat}</p>
      <div className="controls">
        <Dashboard
          strikes={strikes}
          setStrikes={setStrikes}
          balls={balls}
          setBalls={setBalls}
          fouls={fouls}
          setFouls={setFouls}
          atBat={atBat}
          setAtBat={setAtBat}
          hit={hit}
          setHit={setHit} />
      </div>
    </Container>
  );
}

export default App;
