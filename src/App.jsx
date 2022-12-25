import logo from './logo.svg';
import styles from './App.module.css';
import TatetiContainer from './components/TatetiContainer';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <main>
        <TatetiContainer />
      </main>
    </div>
  );
}

export default App;
