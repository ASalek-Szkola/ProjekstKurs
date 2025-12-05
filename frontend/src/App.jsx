import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/get-users");
        if (!response.ok) throw new Error("Response not OK");
        const json = await response.json();
        setUsers(json);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count is
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
