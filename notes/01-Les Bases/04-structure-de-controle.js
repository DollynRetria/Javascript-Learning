/* 
    1- Structures conditionnelles
    Permettent d’exécuter du code en fonction de conditions.

    1.0 if, else if, else

        let age = 20;

        if (age < 18) {
        console.log("Mineur");
        } else if (age === 18) {
        console.log("Tout juste majeur");
        } else {
        console.log("Majeur");
        }

    1.2 switch

        Utile pour comparer une variable à plusieurs valeurs.

        let fruit = "pomme";

        switch (fruit) {
        case "banane":
            console.log("C'est une banane");
            break;
        case "pomme":
            console.log("C'est une pomme");
            break;
        default:
            console.log("Fruit inconnu");
        }

    1.3 Opérateur ternaire ? :
        Expression conditionnelle courte.

        let isLoggedIn = true;
        let message = isLoggedIn ? "Bienvenue !" : "Veuillez vous connecter";

    ================================================================================
    ================================================================================

    2. Structures de boucle (itération)

    Répètent une ou plusieurs instructions tant qu'une condition est vraie.

        2.0 for
            Boucle classique à compteur.

            for (let i = 0; i < 5; i++) {
                console.log(i);
            }

        2.1 while
            Tant que la condition est vraie, on répète.

            let i = 0;
            while (i < 5) {
                console.log(i);
                i++;
            }

        2.2 do...while 
            Comme while, mais la condition est vérifiée après la première exécution.

            let i = 0;
            do {
            console.log(i);
            i++;
            } while (i < 5);

        2.3 for...of 

            Parcourt les éléments d'un objet itérable (tableaux, chaînes, etc.).

            const fruits = ["pomme", "banane", "orange"];
            for (let fruit of fruits) {
            console.log(fruit);
            }

            Avantages : Supporte **break**, **continue** et **return** si on est dans une fonction, Plus flexible pour la logique de contrôle.
            Limites: Ne donne pas l'index directement (il faut utiliser entries() ou une variable à part si besoin).

        2.4 for...in

            Parcourt les clés (propriétés) d’un objet.

            const user = { name: "Ali", age: 30 };
            for (let key in user) {
            console.log(key + ": " + user[key]);
            }

        2.5 forEach

            array.forEach((item) => {
                if (item === 3) return; // ← cela saute simplement cette itération
                console.log(item);
            });

            Avantages : Syntaxe claire et fonctionnelle, Pas besoin de gérer les index.
            Limitations : Ne supporte pas break, continue ni return pour sortir de la fonction englobante.
                          return ici ne quitte pas la boucle, mais seulement la fonction de rappel (callback).



    ================================================================================
    ================================================================================


    3. Instructions de contrôle de boucle
        3.0 break

            Interrompt complètement une boucle.

            for (let i = 0; i < 10; i++) {
            if (i === 5) break;
            console.log(i); // Affiche 0 à 4
            }

        3.1 continue
            
            Passe à l’itération suivante sans exécuter le reste du bloc.

            for (let i = 0; i < 5; i++) {
                if (i === 2) continue;
                console.log(i); // Affiche 0, 1, 3, 4
            }

    ================================================================================
    ================================================================================

    4. Gestion des erreurs

        try...catch...finally
        Permet de capturer les erreurs sans arrêter l’exécution du programme.

        try {
            throw new Error("Erreur test");
        } catch (err) {
            console.log("Erreur attrapée:", err.message);
        } finally {
            console.log("Bloc finally exécuté");
        }

    ================================================================================
    ================================================================================ 

    Résumé des structures de contrôle en JavaScript

    | Catégorie               | Structures                                           |
    | ----------------------- | ---------------------------------------------------- |
    | **Conditionnelles**     | `if`, `else`, `else if`, `switch`, `?:`              |
    | **Boucles**             | `for`, `while`, `do...while`, `for...in`, `for...of` |
    | **Contrôle de boucle**  | `break`, `continue`                                  |
    | **Gestion des erreurs** | `try`, `catch`, `finally`, `throw`                   |







*/