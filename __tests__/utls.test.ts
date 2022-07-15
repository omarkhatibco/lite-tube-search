import { formatNumber } from 'utls';

describe('formatNumber', () => {
  it('should return the white for #292929', () => {
    expect(formatNumber(12234)).toEqual('12K');
  });
  it('should return the black for #fafafa', () => {
    expect(formatNumber(65555555)).toEqual('66M');
  });
  it('should return the black for #aaccff', () => {
    expect(formatNumber(0)).toEqual('0');
  });
});
