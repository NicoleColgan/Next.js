const createPet = function (name) {
  let sex;

  function setName(newName) {
    name = newName;
  }

  function getName() {
    return name;
  }

  function setSex(newSex) {
    sex = newSex;
  }

  function getSex() {
    return sex;
  }

  return function (password) {
    if (password === "chips") {
      return {
        setName,
        getName,
        setSex,
        getSex,
      };
    } else {
      return console.log("Error, incorrect password!");
    }
  };
};

const petWithAccess = createPet("John")("chips");
console.log(petWithAccess.getName());
petWithAccess.setName("Elliott");
console.log(petWithAccess.getName());


const petWithoutAccess = createPet("Coco")("chocolate")
console.log(petWithoutAccess.getName());
