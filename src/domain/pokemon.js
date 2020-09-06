import PokemonsRepository from '@repositories/pokemonsRepository';

export const getPokemons = async () => PokemonsRepository.getAll();

export const getPokemon = async name => PokemonsRepository.getOne(name);

const transformAttributes = {
  types: (types) => types.map(({ type: { name } }) => name),
  stats: (stats) => stats.map(({ base_stat, stat: { name } }) => ({ [name]: base_stat })),
}

const transformAttribute = (attribute, value) =>
  transformAttributes[attribute]
    ? transformAttributes[attribute](value)
    : value

const derializeDataSelectedAttributes = [
  'abilities',
  'forms',
  'height',
  'id',
  'name',
  'sprites',
  'stats',
  'weight',
  'types'
];

export const deserializePokemonData = data =>
  derializeDataSelectedAttributes.reduce((pokemon, attribute) => {
    pokemon[attribute] = transformAttribute(attribute, data[attribute]);

    return pokemon;
  }, {});
