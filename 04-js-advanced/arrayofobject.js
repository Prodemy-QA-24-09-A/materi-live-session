const cats = [
  {
    name: "Oren",
    age: 3,
    mix: false,
  },
  {
    name: "Oreo",
    age: 5,
    mix: true,
  },
];

// for (let cat of cats) {
//   console.log(cat.name);
// }

const newCat = {
  name: "Mochi",
  age: 7,
  mix: false,
};

cats.push(newCat);
// console.log(cats);

cats.forEach((cat) => {
  if(cat.age <= 5) {
    cat.color = "hitam";
  } else if (cat.age >= 7 ) {
    cat.color = "putih"
  } else {
    cat.color = "oren";
  }
  
});
console.log(cats)