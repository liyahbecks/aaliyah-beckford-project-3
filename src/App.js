import './App.css';
import Search from'./Search.js';
import Header from './Header.js';
import TopAnime from './TopAnime.js';
import Footer from './Footer.js';
import axios from 'axios';
import { useState, useEffect} from 'react';

function App() {

  const [anime, setAnime] = useState([]);


  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.jikan.moe/v3/top/anime",
      dataResponse: "JSON",
      params: {
        page: 1,
        subtype: "tv",
        format: "JSON",
      }
  
    }).then((res) => {

      const topAnime = res.data.top

      const topAnimeResults = []

      topAnime.map( (results) => {
        return topAnimeResults.push({
          animeName: results.title,
          animeImage: results.image_url,

        })
      })
      setAnime(topAnimeResults)
      
    })
  }, [])

 

  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <TopAnime anime={anime}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
