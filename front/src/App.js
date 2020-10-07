import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList, selectUserList } from "./features/userList/userListSlice";
import "./App.css";
import Table from "./components/table/Table";
import { selectUser } from "./features/user/userSlice";
import UserInfo from "./components/userInfo/UserInfo";
import AddUserForm from "./components/addUserForm/AddUserForm";
function App() {
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList);
  const user = useSelector(selectUser);

  useEffect(() => {
    // Get Data from Server fetch
    const fetchData = async () => {
      const response = [
        {
          name: "Lisa",
          email: "lista@gmail.com",
          phone: "123456789",
        },
        {
          name: "Tom",
          email: "tom@gmail.com",
          phone: "123456789",
        },
        {
          name: "Jose",
          email: "jose@gmail.com",
          phone: "123456789",
        },
      ];
      await dispatch(createList(response));
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <div className="app__form">
        <AddUserForm />
      </div>
      <div className="app__content">
        {userList && <Table />}
        {user && <UserInfo />}
      </div>
    </div>
  );
}

export default App;
