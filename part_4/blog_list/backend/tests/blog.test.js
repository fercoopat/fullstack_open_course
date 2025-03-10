import { test, describe } from 'node:test';
import { strictEqual } from 'node:assert';
import { dummy } from '../utils/list-helper.js';

test('dummy returns one', () => {
  const blogs = [];

  const result = dummy(blogs);
  strictEqual(result, 1);
});
