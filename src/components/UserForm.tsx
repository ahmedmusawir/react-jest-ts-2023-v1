import React, { useState } from 'react';
import { User } from '../Interfaces';

interface Props {
  onUserAdd: (user: User) => void;
}

function UserForm({ onUserAdd }: Props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className="btn mt-5">Add User</button>
    </form>
  );
}

export default UserForm;
