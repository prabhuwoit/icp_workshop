import { useState } from 'react';

function App() {
  const [loginStatus, setLoginStatus] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Basic username/password check (can be replaced with backend logic)
    if (username === 'admin' && password === 'password') {
      setLoginStatus('Login successful! Welcome, ' + username);
    } else {
      setLoginStatus('Invalid username or password');
    }
  }

  return (
    <main style={styles.mainContainer}>
      <div style={styles.loginBox}>
        <img src="/logo2.svg" alt="DFINITY logo" style={styles.logo} />
        <h2 style={styles.header}>Login Page</h2>
        <form action="#" onSubmit={handleLogin} style={styles.form}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input id="username" type="text" style={styles.input} required />
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input id="password" type="password" style={styles.input} required />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <section id="loginStatus" style={styles.statusMessage}>
          {loginStatus}
        </section>
      </div>
    </main>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  loginBox: {
    width: '400px',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  logo: {
    width: '80px',
    marginBottom: '20px',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#555',
    textAlign: 'left',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  statusMessage: {
    marginTop: '20px',
    fontSize: '14px',
    color: 'green',
  },
};

export default App;