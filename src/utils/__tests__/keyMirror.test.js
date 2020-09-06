import keyMirror from '../keyMirror';

describe('keyMirror', () => {
  describe('When param is an array', () => {
    let originalConsoleError;
    const array = [1, 2, 3];

    beforeEach(() => {
      originalConsoleError = console.error;

      console.error = jest.fn();
    })

    afterEach(() => {
      console.error = originalConsoleError;
    })

    it('Return an empty object', () => {
      const mirrorObject = keyMirror(array);

      expect(mirrorObject).toEqual({});
    });

    it('Print console error', () => {
      keyMirror(array);

      expect(console.error).toBeCalled();
    });
  });

  describe('When param is not an object', () => {
    let originalConsoleError;
    const value = 1;

    beforeEach(() => {
      originalConsoleError = console.error;

      console.error = jest.fn();
    })

    afterEach(() => {
      console.error = originalConsoleError;
    })

    it('Return an empty object', () => {
      const mirrorObject = keyMirror(value);

      expect(mirrorObject).toEqual({});
    });

    it('Print console error', () => {
      keyMirror(value);

      expect(console.error).toBeCalled();
    });
  });

  describe('When param is a valid object', () => {
    it('Return valid object', () => {
      const object = { a: null, b: 1 };
      const expectedMirrorObject = { a: 'a', b: 'b' };

      const mirrorObject = keyMirror(object);

      expect(mirrorObject).toEqual(expectedMirrorObject);
    });
  });
});
