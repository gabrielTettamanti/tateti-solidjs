import logo from './logo.svg';
import styles from './App.module.css';
import TatetiContainer from './components/TatetiContainer';
import ResetButton from './components/ResetButton';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <main>
        <TatetiContainer />
        <ResetButton />
      </main>
    </div>
  );
}

export default App;
