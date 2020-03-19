const expect = chai.expect
describe('mapString ', () => {
    it('is a function', () => {
      expect(typeof (mapString)).to.equals('function');
    });
    it('returns false when values are not mapped', () => {
      let returnedValue = mapString('foo', 'bar');
      expect(returnedValue).to.equal(false);
    });

   it('returns true when the values can be mapped', () => {
      let returnedValue = mapString('bar', 'foo');
      expect(returnedValue).to.equal(true);
  });

  it('returns false when strings are not the same length', () => {
    let returnedValue = mapString('bars', 'foo');
    expect(returnedValue).to.equal(false);
  });

  it('returns true when numeric values map', () => {
    let returnedValue = mapString('321', '123');
    expect(returnedValue).to.equal(true);
  });
  it('returns false when white space is added white space is considered a character', () => {
    let returnedValue = mapString('321 ', '123');
    expect(returnedValue).to.equal(false);
  });
});