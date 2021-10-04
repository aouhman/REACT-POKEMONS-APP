import React, {FunctionComponent, useEffect, useState} from 'react';
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";
import PokemonList from "./Pages/pokemon-list";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PokemonsDetail from "./Pages/pokemon-detail";
import PageNotFound from "./Pages/page-not-found";
import PokemonEdit from "./components/pokemon-edit";

const App: FunctionComponent = () => {


    const [name, setName] = useState('REACT');

    const [ListOfPokemon, setListOfPokemon] = useState<Pokemon[]>([]);


    const addPokemon = (name: any, e: any) => {
        if (e.nativeEvent.which === 1) {
            console.log(`le pokémon ${name} a été ajouté au pokédex, avec le clik gauche`)
        } else if (e.nativeEvent.which === 3) {
            console.log(`le pokémon ${name} a été ajouté au pokédex, avec le clik droit`)
        }
    }
    useEffect(() => {
        setListOfPokemon(POKEMONS)
    }, [])


    return (
        <Router>
            {/*page de navigation commun dans tout les pages*/}
            <nav>
                <div className="nav-wrapper teal">
                    <Link to="/" className="brand-logo center">Home page</Link>
                </div>
            </nav>
            {/*le système de gestion des routes dans notre application*/}

            <Switch>
                <Route exact path="/" component={PokemonList}/>
                <Route exact path="/pokemons" component={PokemonList}/>
                <Route path="/pokemons/edit/:id" component={PokemonEdit}/>
                <Route path="/pokemons/:id" component={PokemonsDetail}/>
                <Route component={PageNotFound}/>
            </Switch>
        </Router>


    )


    /*
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
      */


}

export default App;