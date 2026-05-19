import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

import MusicCard from "../components/MusicCard"
import musicas from "../data/musicas"

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-container">

        <div className="hero">

          <h1>
            Descubra novas músicas com o Liver
          </h1>

          <p>
            Sua plataforma moderna de gerenciamento musical.
          </p>

          <Link to="/register">
            <button>
              Começar agora
            </button>
          </Link>

        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            padding: "30px"
          }}
        >
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

export default Home