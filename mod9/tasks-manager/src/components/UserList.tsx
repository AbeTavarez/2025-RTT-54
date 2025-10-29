import UserProfileCard from "./UserProfileCard";

export interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
  {
    "id": 0,
    "email": "john@gmail.com",
    "name": "john",
  },
  {
    "id": 1,
    "email": "user1@gmail.com",
    "name": "user1",
  },
  {
    "id": 2,
    "email": "user2@gmail.com",
    "name": "user2",
  },
  {
    "id": 3,
    "email": "user3@gmail.com",
    "name": "user3",
  },
  {
    "id": 4,
    "email": "user4@gmail.com",
    "name": "user4",
  },
  
];

function UserList() {
  return (
    <div>
      <h2>User List</h2>


      {users.map(user => (
       <UserProfileCard user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
