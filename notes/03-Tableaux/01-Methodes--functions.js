//TABLEAUX EN js
//1-Ajout / Suppression d'éléments
/*
* push() : Ajoute un élément à la fin du tableau.
* pop() : Supprime le dernier élément du tableau.
* unshift() : Ajoute un élément au début du tableau.
* shift() : Supprime le premier élément du tableau.
*/

//2-Modification / Extraction
/*
* slice(start, end) : Crée une copie d’une portion du tableau.
  a) méthode renvoie les éléments sélectionnés dans un tableau, sous la forme d'un nouveau tableau.
  b) La slice()méthode sélectionne à partir d'un début donné , jusqu'à une fin donnée (non incluse) .
  c) La slice()méthode ne modifie pas le tableau d'origine.

* splice() : méthode ajoute et/ou supprime des éléments de tableau.
             méthode écrase le tableau d'origine.
             array.splice(index, howmany, item1, ....., itemX)
             howmany: nombre d'item à supprimer et item1 => itemX sont les element à ajouter

* concat() : Fusionne deux tableaux.
             const all = fruits.concat(["mangue"]);

*/


//3-Recherche / Test
/*
* includes() : Vérifie si un élément existe.
                fruits.includes("pomme"); // true

* indexOf() : Retourne le premier index d’un élément.
              fruits.indexOf("banane");

* filter() : Renvoie tous les éléments qui passent un test.
             fruits.filter(fruit => fruit.length > 5);
*/

//4-Parcours / Transformation
/*
* forEach() : Exécute une fonction pour chaque élément (sans renvoyer de tableau).
              fruits.forEach(fruit => console.log(fruit));

* map() : Transforme chaque élément et retourne un nouveau tableau.
            const upper = fruits.map(fruit => fruit.toUpperCase());

* reduce() : Réduit les éléments à une seule valeur.
             const total = [1, 2, 3].reduce((a, b) => a + b, 0);
*/

//5- Tri et ordre

/*
* sort() : Trie les éléments (attention : trie par défaut en ASCII). => fruits.sort();
* reverse() : Inverse l’ordre des éléments. => fruits.reverse();
*/


// RESUME === RESUME === RESUME === RESUME

//1. Méthodes de modification (mutent le tableau)
/* 
  Ces méthodes modifient le tableau original :

| Méthode        | Description                             | Exemple                   |
| -------------- | --------------------------------------- | ------------------------- |
| `push()`       | Ajoute à la fin                         | `arr.push(4)`             |
| `pop()`        | Supprime le dernier élément             | `arr.pop()`               |
| `unshift()`    | Ajoute au début                         | `arr.unshift(0)`          |
| `shift()`      | Supprime le premier élément             | `arr.shift()`             |
| `splice()`     | Ajoute/supprime des éléments            | `arr.splice(2, 1)`        |
| `reverse()`    | Inverse l’ordre                         | `arr.reverse()`           |
| `sort()`       | Trie (par défaut : alphabétique)        | `arr.sort()`              |
| `fill()`       | Remplit avec une valeur                 | `arr.fill(0)`             |
| `copyWithin()` | Copie une partie du tableau en lui-même | `arr.copyWithin(1, 2, 4)` |
*/

//2. Méthodes d'accès ou de test (ne modifient pas)
/* 
| Méthode         | Description                         | Exemple              |
| --------------- | ----------------------------------- | -------------------- |
| `includes()`    | Vérifie si une valeur existe        | `arr.includes(3)`    |
| `indexOf()`     | Premier index d’une valeur          | `arr.indexOf(2)`     |
| `lastIndexOf()` | Dernier index d’une valeur          | `arr.lastIndexOf(2)` |
| `join()`        | Concatène les éléments en chaîne    | `arr.join(', ')`     |
| `toString()`    | Convertit en chaîne                 | `arr.toString()`     |
| `at()`          | Accès par index (y compris négatif) | `arr.at(-1)`         |
*/

//3. Méthodes de création / transformation (nouveau tableau)

/*
| Méthode     | Description                            | Exemple                        |
| ----------- | -------------------------------------- | ------------------------------ |
| `map()`     | Transforme chaque élément              | `arr.map(x => x * 2)`          |
| `filter()`  | Garde les éléments qui passent un test | `arr.filter(x => x > 2)`       |
| `slice()`   | Copie une portion (sans modifier)      | `arr.slice(1, 3)`              |
| `concat()`  | Fusionne des tableaux                  | `arr.concat([4, 5])`           |
| `flat()`    | Aplati un tableau imbriqué             | `arr.flat()`                   |
| `flatMap()` | `map()` puis `flat()`                  | `arr.flatMap(x => [x, x * 2])` |
*/

//4. Méthodes utilitaires / de boucle
/*
| Méthode         | Description                                     | Exemple                              |
| --------------- | ----------------------------------------------- | ------------------------------------ |
| `forEach()`     | Boucle sur chaque élément                       | `arr.forEach(x => console.log(x))`   |
| `every()`       | Tous les éléments satisfont un test ?           | `arr.every(x => x > 0)`              |
| `some()`        | Au moins un élément satisfait un test ?         | `arr.some(x => x > 10)`              |
| `reduce()`      | Réduit à une seule valeur                       | `arr.reduce((acc, x) => acc + x, 0)` |
| `reduceRight()` | Comme `reduce()` mais de droite à gauche        | `arr.reduceRight(...)`               |
| `find()`        | Trouve le 1er élément qui passe un test         | `arr.find(x => x > 5)`               |
| `findIndex()`   | Trouve l’index du 1er élément qui passe un test | `arr.findIndex(x => x > 5)`          |
| `entries()`     | Renvoie les paires `[index, valeur]`            | `for (let [i, v] of arr.entries())`  |
| `keys()`        | Renvoie les index                               | `for (let i of arr.keys())`          |
| `values()`      | Renvoie les valeurs                             | `for (let v of arr.values())`        |
*/

//5. Méthodes ES2023 / récentes

/*
| Méthode        | Description                                           | Exemple               |
| -------------- | ----------------------------------------------------- | --------------------- |
| `toReversed()` | Version non destructive de `reverse()`                | `arr.toReversed()`    |
| `toSorted()`   | Version non destructive de `sort()`                   | `arr.toSorted()`      |
| `toSpliced()`  | Version non destructive de `splice()`                 | `arr.toSpliced(1, 2)` |
| `with()`       | Change un élément à un index sans modifier l’original | `arr.with(1, 100)`    |
*/



