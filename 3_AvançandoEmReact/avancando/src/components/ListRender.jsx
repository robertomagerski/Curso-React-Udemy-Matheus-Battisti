import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Roberto", "Magerski", "Junior"]);
  const [users] = useState([
    {
      id: 1,
      name: "Roberto",
      age: 21,
    },
    {
      id: 77887,
      name: "Magerski",
      age: 22,
    },
    {
      id: 8798798789,
      name: "Junior",
      age: 23,
    },
  ]);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
