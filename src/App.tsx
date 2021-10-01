import React, {FunctionComponent, useEffect, useState} from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent= () => {


    const [name, setName] = useState('REACT');

    const [ListOfPokemon,setListOfPokemon] = useState<Pokemon[]>([]);

    const ShowNombrePokemon = () => {
      console.log(ListOfPokemon.length);
    }
    const addPokemon = (name:any,e:any) => {
      if(e.nativeEvent.which === 1){
          console.log(`le pokémon ${name} a été ajouté au pokédex, avec le clik gauche`)
      }else if(e.nativeEvent.which === 3){
          console.log(`le pokémon ${name} a été ajouté au pokédex, avec le clik droit`)
      }
    }
    useEffect(()=>{ setListOfPokemon(POKEMONS) },[])

    return (
      <div>
          {ListOfPokemon.length > 0 ?
       (
              <ul>{ListOfPokemon.map(({name}) =>(
                  <li key={name}>{name}</li>
              ))}</ul>
       )

          :
       (<h1>Bonsoir,  Vous avez de la chance  !</h1>)




      }</div>




    )


}

export default App;