import type { User } from "./UserList";

interface UserProfileCardProps {
  user: User;
}

function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div>
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfileCard;
