import AbilitiesRepository from '@repositories/abilitiesRepository'

const getAbilityDescription = ability =>
  ability.effect_entries.find(
    entry => entry.language.name === "en"
  ).effect;

const deserializeAbilitiesData = ability => ({
  name: ability.name,
  id: ability.id,
  description: getAbilityDescription(ability)
})

export const getAbilities = async ({ abilities }) =>
  await Promise.all(
    abilities.map(async ({ name }) =>
      deserializeAbilitiesData(await AbilitiesRepository.getOne(name))
    )
  )
