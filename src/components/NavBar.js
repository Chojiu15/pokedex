import { useState } from 'react'
import {Link,NavLink, useHistory} from 'react-router-dom'


const NavBar = () => {


    return(
     <>
            <Link to='/'> Home</Link>
            <Link to='/pokemons'> Pokemons</Link> 

           

    </>
    )
}

export default NavBar