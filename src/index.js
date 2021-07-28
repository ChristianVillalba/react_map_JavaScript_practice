import emojipedia from "./emojipedia";
console.log(emojipedia);

// Create an array that countais only the "meaning" text
// text only has a maximun of 100 characters
const hundredCharMeangin = emojipedia.map(function (entry) {
  return entry.meaning.substring(0, 100);
});

console.log(hundredCharMeangin);
