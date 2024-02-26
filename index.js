class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static confrontoAge(userA, userB) {
    if (userA.age > userB.age) {
      return "Esercizio n1:" + " " + userA.firstName + " " + "è più grande di" + " " + userB.firstName;
    }
  }
}

const user1 = new User("Massimo", "Rosati", 63, "Fondi");
const user2 = new User("Anna Maria", "Bianchi", 58, "Fondi");

console.log(User.confrontoAge(user1, user2));

const formNode = document.querySelector("#petForm");
formNode.onsubmit = function (e) {
  e.preventDefault();
  console.log("form inviato");
};

// let petForm = document.form.petForm;
// let nome = petForm.petName;
// let propetario = petForm.ownerName;
// let specie = petForm.species;
// let razza = petForm.breed;

// class Pet {
//   constructor(petName, ownerName, species, breed) {
//     this.PetName = petName;
//     this.ownerName = ownerName;
//     this.species = species;
//     this.breed = breed;
//   }
//   static stessiProprietari(ownerA, ownerB) {
//     return ownerA.ownerName === ownerB.ownerName;
//   }
// }

// const owner1 = new Pet(nome, proprietario, specie, razza);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.PetName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static stessiProprietari(ownerA, ownerB) {
    return ownerA.ownerName === ownerB.ownerName;
  }
}

const owner1 = new Pet("Jack", "Anna Maria", "gatto", "europeo");
const owner2 = new Pet("Frida", "Massimo", "cane", "meticcio");
const owner3 = new Pet("Pixel", "Luca", "gatto", "europeo");
const owner4 = new Pet("Ginger", "Ilaria", "gatto", "europeo");

console.log(Pet.stessiProprietari(owner1, owner2, owner3, owner4));
