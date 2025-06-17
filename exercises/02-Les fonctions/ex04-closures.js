//1- Encapsulation / données privées

//Masquer des variables à l'extérieur d’un objet ou d’une fonction.

function createCounter() {
  let count = 0; // variable "privée"

  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
counter.reset();
console.log(counter.increment()); // 1

//count n’est accessible que via les méthodes retournées : sécurité des données.

//==========================================================
//==========================================================


//2. Fonctions générées dynamiquement

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const doubler = createMultiplier(2);
const tripler = createMultiplier(3);

console.log(doubler(5)); // 10
console.log(tripler(5)); // 15
//Chaque fonction générée garde en mémoire sa propre valeur de factor.


//==========================================================
//==========================================================

//3. Maintenir un état entre appels
//Par exemple : un générateur d’ID unique.

function createIdGenerator() {
  let id = 0;
  return function () {
    return ++id;
  };
}

const getId = createIdGenerator();
console.log(getId()); // 1
console.log(getId()); // 2
console.log(getId()); // 3

//L’état de id est maintenu entre les appels.


//==========================================================
//==========================================================


//4. Fonctions dans des boucles (problème résolu grâce aux closures)

function badLoop() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

badLoop(); // Affiche 3, 3, 3 ❌

function goodLoop() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

goodLoop(); // Affiche 0, 1, 2 ✅



/*
Souhaites-tu un mini-projet utilisant des closures ? Par exemple : un gestionnaire de panier, une todo list encapsulée, ou autre ? >> oui

Créer une fonction createCart() qui retourne un panier avec des méthodes :
addItem(nom, prix)

removeItem(nom)

getTotal()

listItems()

Les données du panier sont privées, accessibles uniquement via les fonctions retournées grâce aux closures.
*/

function createCart() {
  let items = []; // Données privées (non accessibles depuis l’extérieur)

  return {
    addItem(name, price) {
      items.push({ name, price });
      console.log(`✔️ Ajouté : ${name} (${price}€)`);
    },

    removeItem(name) {
      items = items.filter(item => item.name !== name);
      console.log(`❌ Retiré : ${name}`);
    },

    getTotal() {
      return items.reduce((total, item) => total + item.price, 0);
    },

    listItems() {
      if (items.length === 0) {
        console.log("🛒 Le panier est vide.");
      } else {
        console.log("📦 Contenu du panier :");
        items.forEach(item => console.log(`- ${item.name} : ${item.price}€`));
      }
    }
  };
}

const monPanier = createCart();

monPanier.addItem("Livre", 15);
monPanier.addItem("Stylo", 2);
monPanier.addItem("Casque audio", 45);

monPanier.listItems();

console.log("💰 Total :", monPanier.getTotal(), "€");

monPanier.removeItem("Stylo");
monPanier.listItems();

console.log("💰 Total après suppression :", monPanier.getTotal(), "€");








