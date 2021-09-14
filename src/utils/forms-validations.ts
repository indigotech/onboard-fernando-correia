export function validateEmail(email: string): boolean {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

export function validatePassword(password: string): boolean {
  const regex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{7,}$/;
  return regex.test(password);
}

export function validateBirthDate(birthDate: string): boolean {
  const date = birthDate.split('-');
  const currentYear = new Date().getFullYear();
  const isValid = 1900 < Number(date[0]) && Number(date[0]) < currentYear;
  return isValid;
}

export function validatePhone(phone: string): boolean {
  const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{2})[-. )]*(\d{5})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  return regex.test(phone);
}
