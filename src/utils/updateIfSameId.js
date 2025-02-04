export default (id, update) => {
  return (model) => {
    if (model.id !== id) {
      return model;
    };
    return update(model);
  };
};
