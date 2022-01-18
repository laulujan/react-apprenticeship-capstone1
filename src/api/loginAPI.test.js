import loginApi from './loginAPI';

describe('LoginAPI', () => {
  test('returns complete user on success', async () => {
    const username = 'wizeline';
    const password = 'Rocks!';
    expect(await loginApi(username, password)).toEqual({
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    });
  });
  test('returns error when password is wrong', async () => {
    const username = 'wizeline';
    const password = 'Rock!';
    expect(loginApi(username, password)).rejects.toEqual('user');
  });
});
