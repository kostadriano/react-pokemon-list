export default object => {
  if (!(object instanceof Object && !Array.isArray(object))) {
    console.error('Argument must be an object')

    return {}
  }

  return Object.keys(object).reduce((mirrorObject, key) => {
    mirrorObject[key] = key

    return mirrorObject
  }, {})
}
