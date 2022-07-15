export const validateForm = (firstValue: string, secondValue: string) => {
  if (firstValue === secondValue) {
    return true
  } if (firstValue === "") {
    return true
  } if (secondValue === "") {
    return true
    }
  else {
    return false
  }
}
