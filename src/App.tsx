import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

function App() {
  const [clicks, setClicks] = React.useState(0);

  function increaseClicks() {
    setClicks(clicks + 1);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <RedButton onClick={increaseClicks}> "НЕ НАЖИМАТЬ!" </RedButton>
        <Counter>И всё же ты нажал {clicks} раз</Counter>
      </header>
    </div>
  );
}

export default App;

const RedButton = styled.button({
  height: 200,
  width: 200,
  backgroundColor: '#E80000',
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 700,
  borderRadius: '50%',
  border: '3px solid #FFFFFF',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#F80000',
  },

  '&:active': {
    backgroundColor: '#D80000',
  },
});

const Counter = styled.p({
  fontSize: 24,
  color: '#FFFFFF',
});
