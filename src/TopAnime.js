const TopAnime = (props) => {


  const {anime} = props;
  
  
  return (
    <section className="anime-section">
      <div className="wrapper">
        <p className="top-anime-intro">Not sure what you're looking for? Scroll through some of the top anime below!</p>
        <div className="top-anime">
        { 
          anime.map((anime, index) => {
            return (
              <div className="top-result"  key={index}>
                <h2>{anime.animeName}</h2>
                <img src={anime.animeImage} alt={anime.animeName}/>

              </div>
            )
          }) 
        }
        </div>
      </div>
    </section>


  )
}

export default TopAnime;
