import { useState, useEffect } from 'react';

function App() {
  const [politicians, setPoliticians] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/politicians")
      .then(res => res.json())
      .then(data => setPoliticians(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista Politici</h1>
      <div className="politicians-list">
        {politicians.map(politicians => (
          <div className="card" key={politicians.id}>
            <img src={politicians.image} alt={politicians.name} />
            <h2>{politicians.name}</h2>
            <p><strong>Posizione:</strong>{politicians.position}</p>
            <p>{politicians.biography}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App