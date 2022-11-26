// Functions for sorting and organizing inititive

const characters = [
  { name: 'Kaiper', initiative: 19, hasActed: true, isTemp: false },
  { name: 'Gar', initiative: 21, hasActed: true, isTemp: false },
  { name: 'Alphonse', initiative: 1, hasActed: false, isTemp: false },
  { name: 'Asstin', initiative: 16, hasActed: false, isTemp: false },
  { name: 'Skeleton 1', initiative: 12, hasActed: false, isTemp: false },
  { name: 'Skeleton 2', initiative: 6, hasActed: false, isTemp: false },
];

// return a new object of characters sorted by initiative descending
// sortChars = (list) => {
//   var result = {};

//   var initiatives = [];

//   // populate initiatives
//   for (let i = 0; i < list.length; i++) {
//     initiatives.push(list[i].initiative);
//   }

//   max = Math.max(...initiatives);

//   for (let i = max; i > 0; i--) {
//     for (let j = 0; j < list.length; j++) {
//       if (list[j].initiative === i) {
//         var n = list[j].name.toString();
//         result[n] = list[j].initiative;
//       }
//     }
//   }

//   return result;
// };

// Tests
// console.log(newList);

// function to return two objects, a sorted object of those who have not acted, then a sorted object of those who have acted
const sortActed = (list) => {
  var hasGone = {};
  var hasNotActed = {};

  for (let i = 0; i < list.length; i++) {
    var char = list[i];

    if (list[i].hasActed) {
      hasGone[char.name] = list[i].initiative;
    } else {
      hasNotActed[char.name] = char.initiative;
    }
  }

  const order = { acted: hasGone, notActed: hasNotActed };
  return order;
};

const newList2 = sortActed(characters);
console.log(newList2);

module.exports = sortActed;
