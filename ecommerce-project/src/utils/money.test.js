import { it, expect, describe } from 'vitest';
import formatMoney from './money';


describe('formatMoney', () => {
  it('formats 1999 cents as $19.99', () => {

    expect(formatMoney(1999)).toBe('$19.99');
  });

  it('display 2 decimal places', () => {
    expect(formatMoney(1090)).toBe('$10.90');
    console.log('1090 cents formatted as:', formatMoney(1090));
    expect(formatMoney(100)).toBe('$1.00');


  });


  it('formats 0 cents as $0.00', () => {
    expect(formatMoney(0)).toBe('$0.00');
  });
  it('works with negative values', () => {
    expect(formatMoney(-999)).toBe('-$9.99');
    expect(formatMoney(-1234)).toBe('-$12.34');
  })
});
