import PokemonsRepository from '@repositories/pokemonsRepository';

export const getPokemons = async () => PokemonsRepository.getAll();
