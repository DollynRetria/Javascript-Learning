//1- Méthodes statiques de l’objet Object

/*
Ces méthodes s’utilisent comme ceci : Object.nomDeLaMéthode(objet).

| Méthode                              | Description rapide                                              | Exemple                                        |
| ------------------------------------ | --------------------------------------------------------------- | ---------------------------------------------- |
| `Object.keys(obj)`                   | Renvoie un tableau des **clés**                                 | `Object.keys({a: 1, b: 2})` → `['a', 'b']`     |
| `Object.values(obj)`                 | Renvoie un tableau des **valeurs**                              | `Object.values({a: 1, b: 2})` → `[1, 2]`       |
| `Object.entries(obj)`                | Renvoie un tableau de **\[clé, valeur]**                        | `Object.entries({a: 1})` → `[['a', 1]]`        |
| `Object.fromEntries(arr)`            | Convertit une liste `[clé, valeur]` en objet                    | `Object.fromEntries([['a', 1]])` → `{a: 1}`    |
| `Object.assign(target, source)`      | Copie les propriétés dans un autre objet                        | `Object.assign({}, obj)` (copie superficielle) |
| `Object.hasOwn(obj, key)`            | ✅ Nouveauté ES2022, vérifie si la clé existe (prop directe)     | `Object.hasOwn(obj, 'a')`                      |
| `Object.hasOwnProperty()`            | Ancienne version, fonctionne aussi                              | `obj.hasOwnProperty('a')`                      |
| `Object.freeze(obj)`                 | Rends l’objet **immuable**                                      | `Object.freeze(obj)`                           |
| `Object.seal(obj)`                   | Empêche l’ajout ou la suppression de propriétés                 | `Object.seal(obj)`                             |
| `Object.isFrozen(obj)`               | Vérifie si figé                                                 | `Object.isFrozen(obj)`                         |
| `Object.isSealed(obj)`               | Vérifie si scellé                                               | `Object.isSealed(obj)`                         |
| `Object.isExtensible(obj)`           | Vérifie si des propriétés peuvent être ajoutées                 | `Object.isExtensible(obj)`                     |
| `Object.preventExtensions(obj)`      | Empêche d’ajouter de nouvelles propriétés                       | `Object.preventExtensions(obj)`                |
| `Object.defineProperty()`            | Définit une propriété avec des options (getter, writable, etc.) | `Object.defineProperty(obj, 'x', {...})`       |
| `Object.defineProperties()`          | Même chose mais pour plusieurs propriétés                       | `Object.defineProperties(obj, {...})`          |
| `Object.getOwnPropertyDescriptor()`  | Détail d’une propriété                                          | `Object.getOwnPropertyDescriptor(obj, 'a')`    |
| `Object.getOwnPropertyDescriptors()` | Descripteurs de toutes les propriétés                           | `Object.getOwnPropertyDescriptors(obj)`        |
| `Object.getPrototypeOf()`            | Obtient le prototype                                            | `Object.getPrototypeOf(obj)`                   |
| `Object.setPrototypeOf()`            | Change le prototype                                             | `Object.setPrototypeOf(obj, proto)`            |
| `Object.create(proto)`               | Crée un nouvel objet avec un prototype donné                    | `Object.create(Object.prototype)`              |
| `Object.is(a, b)`                    | Compare deux valeurs comme `===`, mais plus précis              | `Object.is(NaN, NaN)` → `true`                 |

*/


//2- Méthodes utiles via les objets eux-mêmes

/*
Ce sont des méthodes qu’on utilise sur une instance d’objet, pas depuis Object.

| Méthode                   | Exemple                                                    |
| ------------------------- | ---------------------------------------------------------- |
| `obj.hasOwnProperty(key)` | `person.hasOwnProperty('age')`                             |
| `obj.toString()`          | `obj.toString()`                                           |
| `obj.valueOf()`           | Donne la valeur primitive (souvent inutilisé manuellement) |

*/


// 3. Boucles sur les objets

//Ce ne sont pas des méthodes, mais très utilisées pour manipuler les objets :

/*
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});



const user = { name: "Alice", age: 30 };

// Liste des clés
console.log(Object.keys(user)); // ["name", "age"]

// Entrées
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 30]]

// Cloner l'objet
const copy = Object.assign({}, user);

// Empêcher toute modification
Object.freeze(copy);

*/