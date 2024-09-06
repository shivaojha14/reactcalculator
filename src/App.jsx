//import styles from './src/App.module.css'; // Import CSS modules
import React from 'react';
import styles from './App.module.css';
import Display from './component/Display';
import ButtonContainer from './component/ButtonContainer';

function App() { // Component name should be capitalized
  return (
    <div className={styles.calculator}>
    <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
