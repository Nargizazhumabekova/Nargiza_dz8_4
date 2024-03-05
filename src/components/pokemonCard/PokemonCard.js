import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from "./PokemonCard.module.css"
import {Link} from "react-router-dom";





const PokemonCard = ({pokemon}) => {
    const [pokemonOne, setPokemonOne] = useState({});
    const getPokemon = async (url) => {
        try {
            const {data} = await axios.get(url);
            return data;
        } catch (e) {
            console.error("Error:", e);
        } finally {
            console.log("Final");
        }
    }


    useEffect(() => {
        getPokemon(pokemon.url).then(pok => setPokemonOne(pok));
    }, [pokemon.url]);

    return (
        <div className={classes.card_content}>
            {pokemon.name}
            {pokemonOne && <img
                src={pokemonOne.sprites?.other?.dream_world?.front_default || ''}
                alt="pokemon"/>} <Link to={`/pokemon/${pokemonOne.id}`}>подробнее</Link>
        </div>
    )
}

export default PokemonCard;