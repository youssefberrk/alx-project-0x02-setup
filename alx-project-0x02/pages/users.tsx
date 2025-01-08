import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

// Fetching data for static generation
const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
};

export { getStaticProps };

// UsersPage component that receives users as a prop
const UsersPage: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
