import { useEffect, useState } from 'react';
// import './App.css';
import NavigationPanel from './components/NavigationPanel';
import CoursePanel from './components/CoursePanel';

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
      <NavigationPanel></NavigationPanel>
      <CoursePanel></CoursePanel>
    </>
  );
}

export default App;
