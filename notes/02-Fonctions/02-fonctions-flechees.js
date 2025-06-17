//Syntaxe moderne (ES6)

// Version standard
const saluer = (nom) => {
  return "Bonjour " + nom;
};

// Version simplifiée (return implicite)
const saluerRapide = nom => "Salut " + nom;

console.log(saluer("Sara"));        // Bonjour Sara
console.log(saluerRapide("Yassir")); // Salut Yassir

//Différence majeure : les fonctions fléchées n’ont pas leur propre this (important dans les objets et classes).
