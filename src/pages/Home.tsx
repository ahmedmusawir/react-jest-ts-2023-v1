import React, { useState } from 'react';
import { Container, Row, Box } from '../components/layouts';
import './Home.scss';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { User } from '../Interfaces';

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };
  return (
    <Container className={''} FULL={false} pageTitle={'Home'}>
      <Row className={'prose'}>
        <div>
          <UserForm onUserAdd={onUserAdd} />
          <hr />
          <UserList users={users} />
        </div>
      </Row>
    </Container>
  );
};

export default HomePage;
