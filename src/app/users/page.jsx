import React from "react";
import { resolve } from "styled-jsx/css";

export default async function UsersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://jsonplaceholder.typicode.com/users12");
  const user = await response.json();
  console.log(user);
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      {user.map((item, index) => {
        return (
          <div
            className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-gray-600"
            key={item.id}
          >
            <div className="flex flex-col space-y-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm ">{item.username}</p>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <div className="text-md">{item.email}</div>
              <div className="text-md">{item.phone}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
