function isPalindrome(str) {
  let reverseText = "";
  str = str.toLowerCase().replaceAll(" ", "");

  for (let i = str.length - 1; i >= 0; i--) {
    reverseText += str[i];
  }

  if (str === reverseText) {
    return true;
  } else {
    return false;
  }
}
isPalindrome();

function arrayMaxMin(arr) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  const result = [min, max];
  return result;
}
