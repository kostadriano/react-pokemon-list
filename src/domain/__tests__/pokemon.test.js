import * as PokemonDomain from '../pokemon';

describe('Pokemon Domain', () => {
  describe('find', () => {
    it('return pokemon from list with the right id', () => {
      const pokemons = [{ id: 1 }, { id: 2 }];
      const selectedPokemon = pokemons[0];

      expect(PokemonDomain.find(pokemons, selectedPokemon.id)).toEqual(selectedPokemon);
    });

    describe('when id is not present in the list', () => {
      it('return undefined', () => {
        const pokemons = [{ id: 1 }, { id: 2 }];

        expect(PokemonDomain.find(pokemons, 123123)).toEqual(undefined);
      });
    });
  });

  describe('deserializePokemonForm', () => {
    it('return array with sprites', () => {
      const form = { sprites: [1, 2, 3] };

      expect(PokemonDomain.deserializePokemonForm(form)).toEqual(form.sprites);
    });
  });
});
