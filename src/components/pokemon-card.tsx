import React, {FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import {useHistory} from "react-router-dom";

type Props = {
    pokemon: Pokemon
    borderColor?: string // ? c'est a dire que une property facultative
};


const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = "#87CEEB"}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();
    const showBorder = () => {
        setColor(borderColor)
    }
    const hideBorder = () => {
        setColor('white')
    }

    function goToPokemon(id: number) {
        history.push(`/pokemons/${id}`);
    }


    return (
        <div className="col s6 m4" onClick={() => {
            goToPokemon(pokemon.id)
        }} onMouseLeave={hideBorder} onMouseEnter={showBorder}>
            <div className="card horizontal" style={{borderColor: color}}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{formatDate(pokemon.created)}</small></p>
                        <p><small>{formatDate}</small></p>

                        {pokemon.types.map(type => (
                            <span key={type} className={formatType(type)}>{type}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;