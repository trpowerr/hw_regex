import Validator from '../js/app';

test('checking validate name', () => {
  const newUser = new Validator('skyWalker');
  const received = newUser.validateUsername();
  const expected = true;
  expect(received).toBe(expected);
});
test('invalid name check', () => {
  expect(() => {
    const newUser = new Validator('Kai1000Ren');
    newUser.validateUsername();
  }).toThrow('Wrong user name!');
});
