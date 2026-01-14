import { IUsers } from "@/types/JsonPlaceholder";

interface UsersProps {
  users: IUsers[];
}

export const Users = ({ users }: UsersProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Users: ({users.length})
      </h2>
      <div>
        {users.slice(0, 5).map((u) => (
          <div key={u.id}>
            <h3>{u.name}</h3>
            <p>{u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
