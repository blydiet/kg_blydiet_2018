describe('mapString ', () => {
    it('is a function', () => {
      expect(typeof mapString).toEqual('function');
    });
    it('returns false when values are not mapped', () => {
      let returnedValue = mapString('foo', 'bar');
      expect(returnedValue).toEqual(false);
    });

   it('returns true when the values can be mapped', () => {
      let returnedValue = mapString('bar', 'foo');
      expect(returnedValue).toEqual(true);
  });

  it('returns false when strings are not the same length', () => {
    let returnedValue = mapString('bars', 'foo');
    expect(returnedValue).toEqual(false);
  });

  it('returns true when numeric values map', () => {
    let returnedValue = mapString('321', '123');
    expect(returnedValue).toEqual(true);
  });
  it('returns false when white space is added white space is considered a character', () => {
    let returnedValue = mapString('321 ', '123');
    expect(returnedValue).toEqual(false);
  });
});