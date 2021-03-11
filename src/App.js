import './App.css';
import AnotherSearch from'./AnotherSearch.js';
import Header from './Header.js';
import Footer from './Footer.js';
import axios from 'axios';
import { useState, useEffect} from 'react';

function App() {

//get anime from jikan API
//save anime to the state
//display data onto the page
  //pass results through components as props

  // const [anime, setAnime] = useState([]);

  // console.log (useState([]))

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://api.jikan.moe/v3/search/anime?",
  //     dataResponse: "JSON",
  //     params: {
  //       q: 'naruto',
  //       order_by: 'title',
  //       sort: 'dsc',
  //       format: "JSON",
  //     },
  //   }).then((res) => {

  //     console.log(res)
  //     const animeResults = res.data.results
      
  //     setAnime(animeResults)
  //   })
  // }, [])

 

  return (
    <div className="App">
      <Header />
      <main>
        <AnotherSearch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
