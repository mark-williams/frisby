import { Map } from 'immutable-ext';
import { All, First } from './';

// NB immutable-ext redefines Map.concat as follows:
// Map.prototype.concat = function(other) {
//   return this.mergeWith((prev, next) => prev.concat(next), other)
// }


describe('07 - semigroups', () => {
  describe('combine objects', () => {
    it('should combine objects using the approp concat for each type', () => {
      const data1 = Map({ name: First('Will'), isValid: All(false), tags: [ 'dev', 'react' ] });
      const data2 = Map({ name: First('Will_100'), isValid: All(true), tags: [ 'functional', 'js' ] });

      const result = data1.concat(data2);
      expect(result.get('name').val).toEqual('Will');
      expect(result.get('isValid').val).toEqual(false);
      expect(result.get('tags')).toEqual([ 'dev', 'react', 'functional', 'js' ]);
    });
  });
});

