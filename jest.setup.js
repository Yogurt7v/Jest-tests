import '@testing-library/jest-dom';
import { toBeShorterThan } from './spec/custom-matchers/toBeShorterThan';
import { toHaveDoneItem } from './spec/custom-matchers/toHaveDoneItem';

expect.extend({
  toBeShorterThan,
  toHaveDoneItem,
});

jest.mock('./src/helpers/helper', () => {
  const realHelpers = jest.requireActual('./src/helpers/helper');
  return {
    ...realHelpers,
  };
});
