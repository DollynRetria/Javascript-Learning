/*
    1. Opérateurs arithmétiques
    Effectuent des opérations mathématiques

| Opérateur | Nom            | Exemple  | Résultat |
| --------- | -------------- | -------- | -------- |
| `+`       | Addition       | `5 + 2`  | `7`      |
| `-`       | Soustraction   | `5 - 2`  | `3`      |
| `*`       | Multiplication | `5 * 2`  | `10`     |
| `/`       | Division       | `5 / 2`  | `2.5`    |
| `%`       | Modulo (reste) | `5 % 2`  | `1`      |
| `**`      | Exponentiation | `2 ** 3` | `8`      |
| `++`      | Incrément      | `x++`    | `x + 1`  |
| `--`      | Décrément      | `x--`    | `x - 1`  |
*/

/*
    2. Opérateurs d’affectation
    Attribuent des valeurs à des variables.

| Opérateur | Description        | Exemple   | Équivaut à   |
| --------- | ------------------ | --------- | ------------ |
| `=`       | Affectation simple | `x = 5`   |              |
| `+=`      | Addition           | `x += 2`  | `x = x + 2`  |
| `-=`      | Soustraction       | `x -= 2`  | `x = x - 2`  |
| `*=`      | Multiplication     | `x *= 2`  | `x = x * 2`  |
| `/=`      | Division           | `x /= 2`  | `x = x / 2`  |
| `%=`      | Modulo             | `x %= 2`  | `x = x % 2`  |
| `**=`     | Exponentiation     | `x **= 2` | `x = x ** 2` |

*/

/*
    3. Opérateurs de comparaison
    Comparent deux valeurs et retournent un booléen (true ou false).

    | Opérateur | Description                     | Exemple     | Résultat |
    | --------- | ------------------------------- | ----------- | -------- |
    | `==`      | Égalité (valeur)                | `5 == '5'`  | `true`   |
    | `===`     | Égalité stricte (valeur + type) | `5 === '5'` | `false`  |
    | `!=`      | Différent (valeur)              | `5 != '5'`  | `false`  |
    | `!==`     | Différent strict                | `5 !== '5'` | `true`   |
    | `>`       | Supérieur à                     | `5 > 3`     | `true`   |
    | `<`       | Inférieur à                     | `5 < 3`     | `false`  |
    | `>=`      | Supérieur ou égal               | `5 >= 5`    | `true`   |
    | `<=`      | Inférieur ou égal               | `5 <= 4`    | `false`  |
*/

/*
    4. Opérateurs logiques
    Utilisés pour combiner des expressions booléennes.

| Opérateur | Description | Exemple         | Résultat   |        |   |         |        |
| --------- | ----------- | --------------- | ---------- | ------ | - | ------- | ------ |
| `&&`      | ET logique  | `true && false` | `false`    |        |   |         |        |
| \`        |             | \`              | OU logique | \`true |   | false\` | `true` |
| `!`       | NON logique | `!true`         | `false`    |        |   |         |        |

*/

/*
    5. Opérateurs bit à bit
    Travaillent au niveau binaire. Moins utilisés, mais puissants.

    | Opérateur | Signification      |              |
    | --------- | ------------------ | ------------ |
    | `&`       | ET bit à bit       |              |
    | \`        | \`                 | OU bit à bit |
    | `^`       | OU exclusif        |              |
    | `~`       | NON bit à bit      |              |
    | `<<`      | Décalage à gauche  |              |
    | `>>`      | Décalage à droite  |              |
    | `>>>`     | Décalage non signé |              |
*/

/*
    6. Opérateurs ternaires
    Expression conditionnelle courte.

    let age = 20;
    let access = (age >= 18) ? 'Autorisé' : 'Refusé';
    console.log(access); // Autorisé
*/


/*
    7. Opérateurs de type / instance
    Pour tester le type ou l’origine d’une valeur.

| Opérateur    | Description                         | Exemple                   |
| ------------ | ----------------------------------- | ------------------------- |
| `typeof`     | Type primitif d'une valeur          | `typeof 123` → `"number"` |
| `instanceof` | Vérifie l'appartenance à une classe | `arr instanceof Array`    |
*/

/*
    8. Opérateurs avancés
    
    8.1 - Nullish coalescing (??)

    "nullish coalescing operator" ou "opérateur de fusion de valeurs nulles".
    Il permet de retourner la première valeur qui n'est ni null ni undefined. Si la première valeur est null ou undefined, il retourne la deuxième valeur.

    let val = null ?? 'par défaut';
    console.log(val); // 'par défaut'

    ===============

    let a = null;
    let b = "Hello";

    let result = a ?? b;
    console.log(result); // Affiche "Hello", car a est null

    Comment ça fonctionne ?
    >> Si la première valeur n'est pas null ni undefined, alors l'opérateur renvoie cette valeur.
    >> Si la première valeur est null ou undefined, il renvoie la deuxième valeur.


    **** Comparaison avec l'opérateur || (OU logique) ****

    L'opérateur ?? est souvent confondu avec l'opérateur ||. Cependant, la différence majeure est que || retourne la deuxième valeur 
    pour toute valeur falsy (comme 0, false, NaN, "", etc.), alors que ?? ne s'applique qu'aux valeurs null ou undefined.

    Exemple avec || :

    let a = 0;
    let b = "Hello";

    let result = a || b;
    console.log(result); // Affiche "Hello", car 0 est falsy, même si ce n'est ni null ni undefined


    Exemple avec ?? :

    let a = 0;
    let b = "Hello";

    let result = a ?? b;
    console.log(result); // Affiche 0, car a n'est pas null ni undefined

    L'opérateur ?? est très utile pour fournir des valeurs par défaut, mais seulement quand la variable est réellement null ou undefined.

    let userName = null;
    let defaultName = "Invité";

    let name = userName ?? defaultName;
    console.log(name); // Affiche "Invité", car userName est null

    ?? permet de choisir une valeur de secours uniquement en cas de null ou undefined, contrairement à || qui réagit à toutes les valeurs falsy.


    8.2 - Optional chaining (?.)
    
    Évite les erreurs si une propriété est undefined.

    let user = {};
    console.log(user.address?.city); // undefined (pas d'erreur)


*/



