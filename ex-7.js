function isPalindrome(string) {
  return string.trim() === string.trim().split("").reverse().join("");
}

//Example case
console.log(isPalindrome("reviver"));
console.log(isPalindrome("บวบ"));
console.log(isPalindrome("deliver"));