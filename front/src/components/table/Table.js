import React from "react";
import { useSelector } from "react-redux";
import { selectUserList } from "../../features/userList/userListSlice";
import "./Table.css";
import TableRow from "./TableRow";

function Table() {
  const userList = useSelector(selectUserList);

  return (
    <table className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%">
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
        {userList?.map((user, i) => (
          <TableRow key={user.email} id={i} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
