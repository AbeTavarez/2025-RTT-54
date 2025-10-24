// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div>
      <img src={user.avatarUrl} alt="user-avatar" />

      <div>{user.name}</div>

      <div>{showEmail ? user.email : null}</div>

      <div>{showRole ? user.role : null}</div>

      {onEdit && (
        <button onClick={onEdit ? () => onEdit(user.id) : undefined}>
          Edit
        </button>
      )}

      <div>{children}</div>
    </div>
  );
}

export default UserProfileCard;
