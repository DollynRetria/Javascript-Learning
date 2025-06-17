// Une closure est une fonction qui "se souvient" de l'environnement dans lequel elle a été créée, même après que cet environnement ait été quitté.

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const compteur1 = createCounter();
console.log(compteur1()); // 1
console.log(compteur1()); // 2

const compteur2 = createCounter();
console.log(compteur2()); // 1 (indépendant de compteur1)

//Chaque appel à createCounter() crée un nouveau contexte avec sa propre variable count.

/*
| Concept              | Description                                       | Exemple clé                                                |
| -------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| **Fonction simple**  | Déclaration standard                              | `function nom() {}`                                        |
| **Fonction fléchée** | Syntaxe concise, pas de `this` propre             | `const f = () => {}`                                       |
| **Scope**            | Contexte d’existence des variables (`let`, `var`) | Bloc ou fonction selon le mot-clé utilisé                  |
| **Closure**          | Fonction avec accès à une variable externe        | `function outer() { let x; return function inner() { x }}` |
*/


