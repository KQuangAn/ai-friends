function reverseOdd(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length % 2 !== 0 ? 
      word.split("").reverse().join("") : word
    )
    .join(" ");
}
