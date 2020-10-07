/* CheckMail
  --> Input: user - Object user to check if attr are correct
  --> Output: empty Object if everything is correct, error Object with the errors found
*/
export const validateForm = ({ id, name, email, phone }) => {
  let errors = {};
  if (name !== "" && checkEmail(email) && checkPhone(phone)) return errors;
  errors = {
    name: name !== "" ? "" : "Name is empty",
    email: checkEmail(email) ? "" : "Incorrect email format",
    phone: checkPhone(phone) ? "" : "Incorrect phone format",
  };
  return errors;
};
/* CheckMail
  --> Input: email - string to be compared
  --> Output: True if it's a correct format email, false if is not correct
*/
export const checkEmail = (email) => {
  if (email === "") return false;
  const re = /\S+@\S+\.\S+/;
  return re.test(email) ? true : false;
};
/* CheckMail
  --> Input: phone - string to be compared
  --> Output: True if it's a correct format phone, false if is not correct
*/
export const checkPhone = (phone) => {
  if (phone === "") return false;
  return phone.match(/\d/g).length < 10;
};
/* CheckMail
  --> Input: input - Input to check if is a number or string
  --> Output: True if is a correct number and fulfill the checkPhone condition, false if is not valid
*/
export const isNumberPhone = (input) => {
  return !isNaN(input) && checkPhone(input) ? true : false;
};
/* CheckMail
  --> Input: data - data Object with the server response
  --> Output: null if the status code is < 200, error object if is higher than 200
*/
export const checkStatusCode = (data) => {
  const statusCode = data.statusCode;
  if (statusCode > 200) {
    return { error: statusCode, message: data.message };
  }
  return null;
};
/* CheckMail
  --> Input: id - id of the row to be selected
  --> Output: None
*/
export const controlSelectedRow = (id) => {
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => {
    if (parseInt(row.id) === id) row.style.background = "#8fa4f2";
    else row.style.background = "#fff";
  });
};
