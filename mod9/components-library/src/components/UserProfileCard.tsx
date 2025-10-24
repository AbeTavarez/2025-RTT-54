import Button from "./Button";

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
      <div className="flex mb-5">
        <img src={user.avatarUrl} alt="user-avatar" width="100" className="mr-2"/>

        <div className="flex flex-col text-center">
          <div>{user.name}</div>

          <div>{showEmail ? user.email : null}</div>

          <div>{showRole ? user.role : null}</div>
        </div>
      </div>

      {onEdit && (
        <Button text="Edit" className="w-full"></Button>
      )}

        {/* <button onClick={onEdit ? () => onEdit(user.id) : undefined}>
          Edit
        </button> */}
      <div>{children}</div>
    </div>
  );
}

export default UserProfileCard;
