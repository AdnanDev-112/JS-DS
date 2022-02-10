let greet = "hellloworld";
let Letters = new Set();
let emptyObj = {};
for (let i = 0; i < greet.length; i++) {
  Letters.add(greet.charAt(i));
}
for (let item of Letters) {
  let letterRepeated = 0;
  for (let i = 0; i < greet.length; i++) {
    if (item === greet.charAt(i)) {
      letterRepeated++;
      emptyObj = { ...emptyObj, [item]: letterRepeated };
    }
  }

};

console.log(emptyObj)