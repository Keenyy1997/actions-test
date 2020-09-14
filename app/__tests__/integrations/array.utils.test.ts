import { ConcatArray } from '../../integrations/array.utils';

describe('test `ConcatArray` functionality', function() {

  it('return [4, 2]', function() {

    const ConcattedArray = ConcatArray(
      [4],
      [2]
    );

    expect(ConcattedArray).toStrictEqual([4, 2]);
  });

});
