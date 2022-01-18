import loginApi from './loginAPI';

describe('LoginAPI', () => {
  test('returns response', async () => {
    expect(loginApi('wizeline', 'Rocks!')).resolves.toContain('Wizeline');
  });
  test('returns error when password is wrong', async () => {
    expect(loginApi('wizeline', 'test!')).rejects.toEqual(
      'Username or password invalid'
    );
  });
  test('returns error when user is wrong', async () => {
    expect(loginApi('test', 'Rocks!')).rejects.toEqual(
      'Username or password invalid'
    );
  });
});
