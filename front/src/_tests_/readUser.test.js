import reducers from "../app/store";

test("reducers", () => {
  reducers.dispatch({
    type: "userList/createList",
    payload: [
      {
        id: 0,
        name: "Marge Simpson",
        phone: "111111111",
        email: "Marge@gmail.com",
      },
      {
        id: 1,
        name: "Lisa Simpson",
        email: "Lisa@gmail.com",
        phone: "222222222",
      },
      {
        id: 2,
        name: "Bart Simpson",
        phone: "333333333",
        email: "Bort@gmail.com",
      },
      {
        id: 3,
        name: "Homer Simpson",
        phone: "444444444",
        email: "Homer@gmail.com",
      },
      {
        id: 4,
        name: "Maggie Simpson",
        phone: "55555555",
        email: "Maggie@gmail.com",
      },
    ],
  });

  reducers.dispatch({
    type: "user/setUser",
    payload: {
      id: 4,
      name: "Maggie Simpson",
      phone: "55555555",
      email: "Maggie@gmail.com",
    },
  });

  expect(reducers.getState()).toEqual({
    userList: {
      list: [
        {
          id: 0,
          name: "Marge Simpson",
          phone: "111111111",
          email: "Marge@gmail.com",
        },
        {
          id: 1,
          name: "Lisa Simpson",
          email: "Lisa@gmail.com",
          phone: "222222222",
        },
        {
          id: 2,
          name: "Bart Simpson",
          phone: "333333333",
          email: "Bort@gmail.com",
        },
        {
          id: 3,
          name: "Homer Simpson",
          phone: "444444444",
          email: "Homer@gmail.com",
        },
        {
          id: 4,
          name: "Maggie Simpson",
          phone: "55555555",
          email: "Maggie@gmail.com",
        },
      ],
    },
    user: {
      user: {
        id: 4,
        name: "Maggie Simpson",
        phone: "55555555",
        email: "Maggie@gmail.com",
      },
    },
    editable: { editable: true },
  });
});
