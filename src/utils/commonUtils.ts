export const isEmailFormat = (email: string) => {
  const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

  if (email.match(emailReg) != null)
    return true

  return false
}