import expect from 'expect';
import { authorsFormattedForDopdown } from './selectors';

describe('Authos selectors', () => {
  describe('authorsFormattedForDopdown', () => {
    it('shuold return author data formated for use in dropdown', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'anthony-black', firstName: 'Anthony', lastName: 'Black'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'anthony-black', text: 'Anthony Black'}
      ];

      expect(authorsFormattedForDopdown(authors)).toEqual(expected);
    });
  });
});
