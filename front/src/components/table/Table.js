import React from "react";
import { useSelector } from "react-redux";
import { selectUserList } from "../../features/userList/userListSlice";
import "./Table.css";
import TableRow from "./TableRow";

function Table() {
  const userList = useSelector(selectUserList);

  return (
    <table className="tableComponent__table tableComponent__table__bordered">
      <thead>
        <tr>
          <th scope="col" data-label="name">
            Name
          </th>
          <th scope="col" data-label="email">
            Email
          </th>
          <th scope="col" data-label="phone">
            Phone
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList?.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
