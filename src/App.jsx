import { useState, useEffect } from 'react';
import './App.css';


const listaNinja = [
  { id: 1, nome: "Naruto Uzumaki", tecnica: "Rasengan", villaggio: "Foglia", img: "/images/image 1 .jpg" },
  { id: 2, nome: "Sasuke Uchiha", tecnica: "Chidori", villaggio: "Foglia", img: "/images/image 2 .jpg" },
  { id: 3, nome: "Sakura Haruno", tecnica: "Impatto del Fiore", villaggio: "Foglia", img: "/images/image 3 .jpg" },
  { id: 4, nome: "Kakashi Hatake", tecnica: "Sharingan", villaggio: "Foglia", img: "/images/image 4 .jpg" },
  { id: 5, nome: "Gaara", tecnica: "Scudo di Sabbia", villaggio: "Sabbia", img: "/images/image 5 .jpg" },
  { id: 6, nome: "Itachi Uchiha", tecnica: "Amaterasu", villaggio: "Alba", img: "/images/image 6 .jpg" },
  { id: 7, nome: "Hinata Hyuga", tecnica: "Palmo d'Aria", villaggio: "Foglia", img: "/images/image 7 .jpg" },
  { id: 8, nome: "Shikamaru Nara", tecnica: "Ombra", villaggio: "Foglia", img: "/images/image 8 .jpg" },
  { id: 9, nome: "Jiraiya", tecnica: "Richiamo", villaggio: "Foglia", img: "/images/image 9 .jpg" },
  { id: 10, nome: "Tsunade", tecnica: "Forza Bruta", villaggio: "Foglia", img: "/images/image 10 .jpg" },
  { id: 11, nome: "Madara Uchiha", tecnica: "Hengoku", villaggio: "Foglia", img: "/images/image 11 .jpg" },
  { id: 12, nome: "Pain", tecnica: "Shinra Tensei", villaggio: "Alba", img: "/images/image 12 .jpg" }
];

function App() {

  const [ninjas, setNinjas] = useState(() => {
    const salvati = localStorage.getItem("database-ninja");
    return salvati ? JSON.parse(salvati) : listaNinja;
  });

 const [ filtro, setFiltro ] = useState('Tutti')
 const [ ricerca, setRicerca ] = useState('')
    
 // --- STATI PER IL MODALE JUTSU --- //
 const [modaleAperto, setModaleAperto] = useState(false);
  const [infoJutsu, setInfoJutsu] = useState({ nomeNinja: '', nomeTecnica: '' });

 useEffect(() => {
    localStorage.setItem("database-ninja", JSON.stringify(ninjas));
  }, [ninjas]);

 const ninjaFiltrati = ninjas.filter(ninja => {
  const matchVillaggio = filtro === 'Tutti' || ninja.villaggio === filtro;
  const matchNome = ninja.nome.toLowerCase().includes(ricerca.toLowerCase());
  return matchVillaggio && matchNome;
 });

 const eliminaNinja = (id) => {
    setNinjas(ninjas.filter(n => n.id !== id));
  };
         // --- FUNZIONE PER APRIRE IL MODALE --- //
  const attivaJutsu = (ninja) => {
    setInfoJutsu({ nomeNinja: ninja.nome, nomeTecnica: ninja.tecnica });
    setModaleAperto(true);

    setTimeout(() => setModaleAperto(false), 6000)

  };

  return (
    <div className="main-page">
      <h1>Shinobi Archive</h1>

      {/* --- Barra di Ricerca --- */}
      <div className="search-container">
        <input 
        type="text"
        placeholder="Cerca un ninja... " 
        value={ricerca}
        onChange={(e) => setRicerca(e.target.value)}         
        />
      </div>
  
  <div className="filter-container">
    {['Tutti', 'Foglia', 'Sabbia', 'Alba'].map(v => (
      <button 
      key={v} 
      className={filtro === v ? 'btn-filter active' : 'btn-filter'}
      onClick={() => setFiltro(v)}
      >
        {v}
      </button>
    ))}
  </div>

<div className="ninja-grid">
        {ninjaFiltrati.length > 0 ? (
          // SE CI SONO NINJA: mostriamo la mappa
          ninjaFiltrati.map((ninja) => (
            <div className={`ninja-card ${ninja.villaggio.toLowerCase()}`} key={ninja.id}>
              <div className="card-header">
                <img src={ninja.img} alt={ninja.nome} />
              </div>
              <div className="card-body">
                <h2>{ninja.nome}</h2>
                <p>Villaggio: <span>{ninja.villaggio}</span></p>
                <p>Tecnica: <span>{ninja.tecnica}</span></p>
                <button className="btn-atk" onClick={() => attivaJutsu(ninja)}>
                  Esegui Jutsu
                </button>
              </div>
            </div>
          ))
        ) : (
          // ALTRIMENTI: mostriamo il messaggio d'errore
          <h2 className="no-results">Nessun ninja trovato nel database...</h2>
        )}
      </div>
      {modaleAperto && (
        <div className="modal-overlay" onClick={() => setModaleAperto(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="chakra-effect"></div> {/* Effetto visivo decorativo */}
            <span className="close-modal" onClick={() => setModaleAperto(false)}>×</span>
            <h2>ATTIVAZIONE JUTSU!</h2>
            <p className="ninja-attacker">{infoJutsu.nomeNinja}</p>
            <p className="jutsu-name">{infoJutsu.nomeTecnica}</p>
          </div>
        </div>
      )}
  </div>
  );
}

export default App;
