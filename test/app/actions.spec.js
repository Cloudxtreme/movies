import { selectMovie, SELECT_MOVIE } from '../../src/app/actions';

describe('ActionCreators', () => {
  describe('selectMovie', () => {
    it('Returns an action with undefined payload', () => {
      let action = selectMovie();
      assert.deepEqual(action, { type: SELECT_MOVIE, payload: { movie: undefined }, error: false });
    });
    it('Returns an action with string payload', () => {
      let action = selectMovie('Casino Royale');
      assert.deepEqual(action, { type: SELECT_MOVIE, payload: { movie: 'Casino Royale' }, error: false });
    })
  })
});
