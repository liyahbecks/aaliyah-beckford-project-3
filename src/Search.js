//Search.js


const Search = (props) => {


  // when user types in the field

  const handleChange = () => {
    console.log('something changed')
  }
  //when user submits form 
  const handleUserInput = (e) => {
    e.preventDefault();
    console.log("clicked")
  }
  
  
  const {animeResults} = props;
  
  
  return (
    <section className="anime-section">
      <div className="wrapper">

        <form>
            <label className="sr-only" htmlFor="search">Search</label>
            <input type="text" placeholder="i.e Naruto, One Piece" id="search" onChange={handleChange}></input>
            <button type="submit" onClick={handleUserInput}>Search</button>
        </form>
        <div className="result-container"> 
      {
        animeResults.map((results) => {
          return (
            <div className="result" key={results.id}>
              <div className="result-text">
              <h2>{results.title}</h2>
              <p className="anime-synopsis">{results.synopsis}</p>
              <p className="anime-episode">Episodes: {results.episodes}</p>
              <p className="anime-rating">Rated: {results.rated}</p>
              </div>
              <img src={results.image_url} alt= {results.title} />
            </div>
          )
        })
      }
      </div>
      </div>
    </section>


  )
}

export default Search;
