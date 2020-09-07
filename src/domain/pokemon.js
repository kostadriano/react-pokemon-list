import PokemonsRepository from '@repositories/pokemonsRepository';

export const getPokemonsNames = async (offset = 0) => PokemonsRepository.getAll(offset);

export const getAllPokemons = async pokemons => await Promise.all(pokemons.map(({ name }) => getPokemon(name)));

export const getPokemon = async name => deserializePokemonData(await PokemonsRepository.getOne(name));

export const getForm = async ({ name }) => deserializePokemonForm(await PokemonsRepository.getForm(name));

export const find = (pokemons, id) => pokemons.find((pokemon) => pokemon.id === id)

const transformAttributes = {
  abilities: abilities => abilities.map(({ ability: { name } }) => ({ name })),
  types: types => types.map(({ type: { name } }) => name),
  stats: stats => stats.map(({ base_stat, stat: { name } }) => ({ name, value: base_stat })),
  fetched: () => false,
}

export const deserializePokemonForm = ({ sprites }) => sprites;

const transformAttribute = (attribute, value) =>
  transformAttributes[attribute]
    ? transformAttributes[attribute](value)
    : value

const acceptedAttributes = [
  'abilities',
  'height',
  'id',
  'name',
  'sprites',
  'stats',
  'weight',
  'types',
  'fetched'
];

export const deserializePokemonData = data =>
  acceptedAttributes.reduce((pokemon, attribute) => {
    pokemon[attribute] = transformAttribute(attribute, data[attribute]);

    return pokemon;
  }, {});
