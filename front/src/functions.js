/* CheckMail
  --> Input: user - Object user to check if attr are correct
  --> Output: empty Object if everything is correct, error Object with the errors found
*/
export const validateForm = ({ user }) => {
  let errors = {};
  const { name, email, phone } = user;
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
