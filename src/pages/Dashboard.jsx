import MusicCard from "../components/MusicCard"
import "../styles/dashboard.css"
import musicas from "../data/musicas"

function Dashboard() {

  const maisTocadas = musicas.slice(0, 3)

  const recomendadas = [...musicas]

  const artistas = [
    {
      nome: "Drake",
      imagem:
        "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
    },

    {
      nome: "Travis Scott",
      imagem:
        "https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71"
    }
  ]

  return (
    <div className="dashboard">

      <nav className="dashboard-navbar">

        <a href="/" className="dashboard-logo">
          Liver
        </a>

      </nav>

      <h1 className="dashboard-title">
        Dashboard
      </h1>

      {/* MAIS TOCADAS */}
      <section className="top-section">

        <h2>🔥 Mais tocadas</h2>

        <div className="carousel">

          {maisTocadas.map((musica) => (
            <div className="carousel-card" key={musica.id}>

              <img
                src={musica.capa}
                alt={musica.nome}
              />

              <div className="carousel-info">
                <h3>{musica.nome}</h3>
                <p>{musica.artista}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* MAIS DO QUE VOCÊ GOSTA */}
      <section className="recommend-section">

        <h2>🎧 Mais do que você gosta</h2>

        <div className="music-grid">

          {recomendadas.map((musica) => (
            <MusicCard
              key={musica.id}
              musica={musica}
            />
          ))}

        </div>

      </section>

      {/* ARTISTAS */}
      <section className="artist-section">

        <h2>⭐ Artistas recomendados</h2>

        <div className="artist-grid">

          {artistas.map((artista, index) => (
            <div className="artist-card" key={index}>

              <img
                src={artista.imagem}
                alt={artista.nome}
              />

              <h3>{artista.nome}</h3>

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default Dashboard