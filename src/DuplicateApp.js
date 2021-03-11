import './App.css';
import Search from'./Search.js';
import Header from './Header.js';
import Footer from './Footer.js';
import axios from 'axios';
import React, { useState, useEffect} from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state= { userinput:''}
    }

    handleChange = event => {
        this.setState({ userinput: event.target.value });
      };
     

  const [anime, setAnime] = useState([]);

  console.log (useState([]))

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.jikan.moe/v3/search/anime?",
      dataResponse: "JSON",
      params: {
        q: this.state.userinput,
        order_by: 'title',
        sort: 'dsc',
        format: "JSON",
      },
    }).then((res) => {

      console.log(res)
      const animeResults = res.data.results
      
      setAnime(animeResults)
    })
  }, [])

 
render () {
  return (
    <div className="App">
      <Header />
      <main>
      <Search animeResults={anime}/>
      </main>
      <Footer />
    </div>
  );
}
}

export default App;