import "../styles/home.css"

function Home() {
  return (
    <div className="home">

      <a href="/" className="home-logo">
        Liver
      </a>

      <div className="home-content">

        <h1>
          Sua plataforma de músicas favorita
        </h1>

        <p>
          Escute suas músicas preferidas,
          descubra novos artistas e aproveite
          uma experiência moderna e imersiva.
        </p>

        <div className="home-buttons">

          <a href="/login" className="home-btn">
            Começar agora
          </a>

          <a href="/register" className="home-btn secondary">
            Criar conta
          </a>

        </div>

      </div>

    </div>
  )
}

export default Home