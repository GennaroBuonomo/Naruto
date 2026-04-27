import './App.css';

function App() {
  return (
    <div className="main-page">
      <h1 style={{ textAlign: 'center', color: '#ff6600', fontSize: '3rem' }}>
        Naruto Shinobi Archive
      </h1>

      {/* Il container con la classe scritta nel CSS */}
      <div className="container">
        
        {/* Card di Naruto */}
        <div className="ninja-card">
          <img src="https://via.placeholder.com/150" alt="Naruto" />
          <h2>Naruto Uzumaki</h2>
          <p><strong>Villaggio:</strong> Foglia</p>
          <p><strong>Tecnica:</strong> Rasengan</p>
          <button onClick={() => alert('Rasengan!!!')}>Attacca!</button>
        </div>

        {/* Card di Sasuke */}
        <div className="ninja-card">
          <img src="https://via.placeholder.com/150" alt="Sasuke" />
          <h2>Sasuke Uchiha</h2>
          <p><strong>Villaggio:</strong> Foglia</p>
          <p><strong>Tecnica:</strong> Mille Falchi</p>
          <button onClick={() => alert('Chidori!!!')}>Attacca!</button>
        </div>

      </div>
    </div>
  );
}

export default App;
