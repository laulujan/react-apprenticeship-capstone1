import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  FormContainer,
  Input,
  Button,
  CancelButton,
} from './Login.styled';
import { useAuth } from '../../providers/Auth/Auth.provider';

const Login = () => {
  const history = useHistory();
  const { login, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const user = await login(username, password);
    if (user) {
      history.push('/');
    }
    if (error) {
      setUsername('');
      setPassword('');
    }
  }
  const handleCancelClick = () => {
    history.push('/');
  };
  return (
    <Container>
      <FormContainer>
        <label>
          User
          <Input
            type="text"
            name="user"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div>
          <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
          <Button onClick={handleLogin}>Login</Button>
        </div>
        {error && <div>{error}</div>}
      </FormContainer>
    </Container>
  );
};

export default Login;
