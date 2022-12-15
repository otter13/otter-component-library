/**
 * Removes any non digit characters from a string
 */
export function removeNonDigits(formattedString: string) {
  return formattedString.replace(/\D/g, '');
}
