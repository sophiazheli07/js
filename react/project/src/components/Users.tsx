import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([
    { name: "Igor", age: 22 },
    { name: "Oleg", age: 23 },
  ]);

  //first render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
        setUsers(json);
      });
  }, []);

  //users re-render
  useEffect(() => {}, [users]);

  //all re-renders (not really usable)
  useEffect(() => {});

  return (
    <div>
      <h2>Users</h2>

      {users.map((user, i) => (
        <div key={`${user.name}-${i}`} className="user-card">
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
          {Object.values(user.company).map((data: any) )}
        </div>
      ))}
    </div>
  );
};
