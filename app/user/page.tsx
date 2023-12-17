'use client'
// pages/users.tsx
import { useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createdUser, setCreatedUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);

  const createUser = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });

      const data = await response.json();
      setCreatedUser(data.user);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setAllUsers(data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <h1>User Management</h1>

      {/* Create User Form */}
      <div>
        <h2>Create User</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button onClick={createUser}>Create User</button>
        {createdUser && (
          <div>
            <p>User created:</p>
            <pre>{JSON.stringify(createdUser, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Fetch All Users */}
      <div>
        <h2>All Users</h2>
        <button onClick={fetchAllUsers}>Fetch All Users</button>
        {allUsers.length > 0 && (
          <div>
            <p>All Users:</p>
            <ul>
              {allUsers.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
