const sum = (a, b) => a + b;

const length = (object) => {
  let keysAmount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      keysAmount++;
    }
  }
  return keysAmount;
};

const copy = (object) => {
  const newObj = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      newObj[key] = element;
    }
  }
  return newObj;
};

const cave = {
  a: {
    a: 1,
    b: false,
  },
  b: {
    a: false,
    b: false,
  },
};

const newCave = copy(cave);

cave.a = "abc";

console.log(newCave.a === cave.a);

console.log(newCave, cave);

cave.a.a = "abd";

console.log(newCave.a.a === cave.a.a);

const deepCopy = (object) => {
  const newObj = {};
  for (const key in object) {
    const element = object[key];
    if (object.hasOwnProperty(key)) {
      if (element !== null && typeof element === "object") {
        newObj[key] = deepCopy(element);
      } else {
        newObj[key] = element;
      }
    }
    return newObj;
  }
};
