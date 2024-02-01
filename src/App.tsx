import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

interface ClicksData {
  clicks: number;
}

function App() {
  const [clicks, setClicks] = React.useState(0);

  React.useEffect(function () {
    fetch('http://localhost:8000/clicks')
      .then(function (response) {
        return response.json();
      })
      .then(function (data: ClicksData) {
        setClicks(data.clicks);
      });
  }, []);

  function increaseClicks() {
    setClicks(clicks + 1);

    const data: ClicksData = {
      clicks: clicks + 1,
    };

    fetch('http://localhost:8000/clicks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  function ResetClicks() {
    setClicks(0);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <RedButton onClick={increaseClicks}> "НЕ НАЖИМАТЬ!" </RedButton>
        <Counter> И всё же ты нажал {clicks} раз</Counter>
        <BlueButton onClick={ResetClicks}> "Сбросить" </BlueButton>
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

const BlueButton = styled.button({
  height: 50,
  width: 200,
  backgroundColor: '#000088',
  color: '#FFFFFF',
  fontSize: 15,
  fontWeight: 70,
  borderRadius: '10%',
  border: '1px solid #FFFFFF',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#0000f3',
  },

  '&:active': {
    backgroundColor: '#000055',
  },
});
