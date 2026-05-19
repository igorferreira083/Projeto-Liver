import "../styles/MusicCard.css"

function MusicCard({ musica }) {
  return (
    <div className="music-card">
      <img src={musica.capa} alt={musica.nome} />

      <h2>{musica.nome}</h2>

      <p>{musica.artista}</p>

      <span>{musica.genero}</span>

      <audio controls>
        <source src={musica.audio} type="audio/mp3" />
      </audio>
    </div>
  )
}

export default MusicCard