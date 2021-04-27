import {useState, useEffect} from 'react'
import axios from 'axios'
import PokeCard from './PokeCard'
import { Link } from 'react-router-dom'


const Pokemons = () => {

    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        fetchPokemon()
    }, [])
    
    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=100')
        .then(response => setPokemons(response.data.results))
    }

    const getUrl = (url) => {
        url = url.split('/')
        url = url[6]
        
        return url
    }

    // console.log(getUrl('https://pokeapi.co/api/v2/pokemon/101/'))


        return (
            <>
            {pokemons.map(pokemon => {
                return <Link to={`/pokemon/${getUrl(pokemon.url)}`} > <PokeCard  {...pokemon} /></Link>
            }  )}
            </>

        )
}

export default Pokemons