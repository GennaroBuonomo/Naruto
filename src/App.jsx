import { useState } from 'react';
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
 const [ filtro, setFiltro ] = useState('Tutti')

 const ninjaFiltrati = filtro === 'Tutti'
 ?listaNinja
 :listaNinja.filter(ninja => ninja.villaggio === filtro)

  return (
    <div className="main-page">
      <h1>Shinobi Archive</h1>
  
  <div className="filter-container">
    {['Tutti', 'Foglia', 'Sabbia', 'Alba'].map(v => (
      <button key={v} onClick={() => setFiltro(v)}>{v}</button>
    ))}
  </div>

  <div className="ninja-grid">
    {ninjaFiltrati.map((ninja) => (
      <div className={`ninja-card ${ninja.villaggio.toLowerCase()}`} key={ninja.id}>
        <div className="card-header">
          <img src={ninja.img} alt={ninja.nome} />
        </div>
        <div className="card-body">
          <h2>{ninja.nome}</h2>
          <p>Villaggio: <span>{ninja.villaggio}</span></p>
          <p>Tecnica: <span>{ninja.tecnica}</span></p>
          <button className="btn-atk" onClick={() => alert(ninja.tecnica)}>
            Esegui Jutsu
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;
