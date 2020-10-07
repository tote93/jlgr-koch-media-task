import reducers from "../app/store";

test("initialState", () => {
  let state;
  state = reducers.getState();
  expect(state).toEqual({
    userList: { list: null },
    user: { user: null },
    editable: { editable: true },
  });
});
