//Déplie (copie) les éléments d’un tableau ou d’un objet.

//1-Tableau
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

//2-Objet
const user = { name: "Alice" };
const newUser = { ...user, age: 25 };

