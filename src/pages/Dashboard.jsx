import Navbar from "../components/Navbar";
import MusicCard from "../components/MusicCard";
import SearchBar from "../components/SearchBar"; 

import musicas from "../data/musicas";

function Dashboard({ search, setSearch }) { 

  const musicasFiltradas = musicas.filter((musica) =>
    musica.titulo.toLowerCase().includes(search.toLowerCase()) ||
    musica.artista.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Suas músicas</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <div className="music-grid">
          {musicasFiltradas.length > 0 ? (
            musicasFiltradas.map((musica) => (
              <MusicCard
                key={musica.id}
                musica={musica}
              />
            ))
          ) : (
            <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#888" }}>
              Nenhuma música encontrada para "{search}".
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;