import * as fromCode from './code.actions';

describe('loadCodes', () => {
  it('should return an action', () => {
    expect(fromCode.loadCodes().type).toBe('[Code] Load Codes');
  });
});
