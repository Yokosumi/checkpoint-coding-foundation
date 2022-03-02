function zipStrings(strA, strB) {
  const arrA = strA.split(""); // [a,b,c]
  const arrB = strB.split(""); // [1,2,3]

  let mergedArr = [];

  for (let i = 0; i < arrA.length || i < arrB.length; i++) {
    mergedArr.push(arrA[i]);
    mergedArr.push(arrB[i]);
  }

  return mergedArr.join("");
}
