// aqui se agregan todas las peticiones http para tareas asincronas

import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // todo realizar peticion http

        // dispatch(setPokemons());
    }
}