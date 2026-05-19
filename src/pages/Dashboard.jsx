import Navbar from "../components/Navbar"
import MusicCard from "../components/MusicCard"

import musicas from "../data/musicas"

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <h1>Suas músicas</h1>

        <div className="music-grid">

          {musicas.map((musica) => (
            <MusicCard
              key={musica.id}
              musica={musica}
            />
          ))}

        </div>

      </div>
    </>
  )
}

export default Dashboard