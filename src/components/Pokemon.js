import {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
 
    const {id} = props.match.params
    console.log(id)

    const [poke, setPoke] = useState(
        {
            sprites : {}
        }
    )

    useEffect(() => {
        fetchPokemon()
    }, [])


    const fetchPokemon = async () => {
       await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => setPoke(response.data))
        console.log(poke)

    }

    return(
        <>
     
        <p>{poke.base_experience}</p>
        <p></p>
                <img  src={poke.sprites.front_default}/> 
                <img  src={poke.sprites.back_default}/> 


        </>
    )
}

export default Pokemon