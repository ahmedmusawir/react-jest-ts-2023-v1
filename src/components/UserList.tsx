import { User } from '../Interfaces';

interface Props {
  users: User[];
}
function UserList({ users }: Props) {
  const renderedUsers = users.map((user: User) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
}

export default UserList;
