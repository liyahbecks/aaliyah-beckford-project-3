import { render } from "@testing-library/react";
import { Component } from "react";
import axios from 'axios';

class AnotherSearch extends Component {

    constructor () {

        super();

        this.state = {
            //tracks search input
            animeSearch: "",
            //results of axios call based on animeSearch
            chosenAnime: [],
        }
    }

    handleChange = (e) => {
        this.setState({
            animeSearch: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.userSearch()


        //clear search 
        this.setState ({
            animeSearch: ""
        })
    }
    userSearch = () => {
    
        // useEffect(() => {
            axios({
            method: "GET",
            url: "https://api.jikan.moe/v3/search/anime?",
            dataResponse: "JSON",
            params: {
                q: this.state.animeSearch,
                order_by: 'title',
                sort: 'dsc',
                format: "JSON",
            },
            }).then((res) => {
        
                const animeResults = res.data.results
                
                const newState = []
        
                animeResults.map( (results) => {
                    return newState.push({
                    title:  results.title, 
                    image: results.image_url,
                    synopsis: results.synopsis,
                    rating: results.rated,
                    episodes: results.episodes,
                    })
    
                })
                this.setState({
                    chosenAnime: newState,
                })
                console.log(animeResults, newState)
            }) 
        // }, [])
        
    
    }

    render() {
        return (
            <section className="anime-section">

                <div className="wrapper">
        
                    <form action="#" onSubmit= {this.handleSubmit}>
                        <label className="sr-only" htmlFor="search">Search</label>
                        <input type="text" placeholder="i.e Naruto, One Piece" id="search" value={this.state.animeSearch} onChange={this.handleChange}></input>
                        <button type="submit">Search</button>
                    </form>

                    <div className="result-container"> 
                        {
                            this.state.chosenAnime.map((results, index ) => {
                            return (
                                <div className="result" key={index}>
                                    <div className="result-text">
                                    <h2>{results.title}</h2>
                                    <p className="anime-synopsis">{results.synopsis}</p>
                                    <p className="anime-episode">Episodes: {results.episodes}</p>
                                    <p className="anime-rating">Rated: {results.rating}</p>
                                    </div>
                                    <img src={results.image} alt= {results.title} />
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
            </section>
        )



    }


    
}


export default AnotherSearch;