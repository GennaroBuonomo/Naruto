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
  return (
    <div className="main-page">
      <h1 style={{ textAlign: 'center', color: '#ff6600', fontSize: '3rem' }}>
        Naruto Shinobi Archive
      </h1>

      <div className="container">
        {listaNinja.map((ninja) => (
          <div className="ninja-card" key={ninja.id}>
            <img src={ninja.img} alt={ninja.nome} />
            <h2>{ninja.nome}</h2>
            <p><strong>Villaggio:</strong> {ninja.villaggio} </p>
            <p><strong>Tecnica:</strong> {ninja.tecnica} </p>
            <button onClick={() => alert(`Attivazione: ${ninja.tecnica}`)}>
              Attacca!
            </button>
          </div>
        ))}
      </div>
          
    </div>
  );
}

export default App;
