import React from "react";

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json();
  console.log(user);
  return (
    <div className="grid grid-cols-2">
      {user.map((item, index) => {
        return (
          <div className="flex flex-row gap-2 justify-center" key={index}>
            <h1>{item.id}</h1>
            <p>{item.name} <span className="font-bold">username</span> {item.username}</p>
          </div>
        );
      })}
    </div>
  );
}
