import updateIfSameId from '../updateIfSameId';

describe('updateIfSameId', () => {
  describe('when id is present in the list', () => {
    const list = [{ id: 1 }, { id: 2 }];
    const id = list[0].id;

    it('call update callBack', () => {
      const update = jest.fn();

      list.map(updateIfSameId(id, update));

      expect(update).toHaveBeenCalled();
    });
  });

  describe('when id is not present in the list', () => {
    const list = [{ id: 1 }, { id: 2 }];
    const id = 123123;

    it('do not call update callBack', () => {
      const update = jest.fn();

      list.map(updateIfSameId(id, update));

      expect(update).not.toHaveBeenCalled();
    });
  });
});

