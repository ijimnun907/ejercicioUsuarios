import { useState } from 'react'
import { useEffect } from "react"
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch("https://randomuser.me/api?results=5&nat=es")
          .then((response) => response.json())
          .then((data) => {
              const males = data.results.filter(user => user.gender === "male");
              setUsers(males);
          })
          .catch((error) => console.log("Error: " + error))
  }, []);

  return (
    <>
        <h2>Usuarios Masculinos</h2>
        <ul>
            {users.map((user) => (
                <li key={user.login.uuid}>
                    <img src={user.picture.thumbnail} alt={user.name.first} />
                    {user.name.first} {user.name.last} - {user.email}
                </li>
            ))}
        </ul>
    </>
  )
}

export default App
