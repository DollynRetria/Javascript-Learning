/*
1- Qu'est-ce que l'Asynchrone ?
En JavaScript, asynchrone signifie que certaines opérations (ex : accès réseau, lecture de fichier...) ne bloquent pas le reste du code.
Le code continue à s’exécuter pendant que l’opération se termine en arrière-plan.
*/

//2- Callbacks
//Un callback est une fonction passée en argument, exécutée une fois l’opération terminée.
function fetchData(callback) {
  setTimeout(() => {
    callback("Données reçues !");
  }, 1000);
}

fetchData(data => console.log(data)); // => Données reçues !

/*
Inconvénients :
- Imbriqué => "callback hell" 
- Difficulté à gérer les erreurs
 */


//3- Promises
/*
Une Promise est un objet qui représente une opération asynchrone avec 3 états :
- pending (en attente)

- fulfilled (réussie)

- rejected (échouée)
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Succès !"), 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));

//4- async / await (ES8)
//Permet d’écrire du code asynchrone comme du synchrone. Plus lisible et facile à gérer.

async function getData() {
  try {
    const response = await fetch('https://api.example.com');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Erreur :", err);
  }
}

//5. fetch (API HTTP intégrée)
/*Utilisé pour faire des requêtes réseau (GET, POST...).*/

fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Avec async/await :
const response = await fetch(url);
const data = await response.json();

/*

| Concept         | Avantage                   | Inconvénient                        |
| --------------- | -------------------------- | ----------------------------------- |
| **Callback**    | Simple à comprendre        | Difficulté à imbriquer, erreurs     |
| **Promise**     | Moins de "callback hell"   | Toujours un peu verbeux             |
| **async/await** | Lisible, facile à déboguer | Doit être dans une fonction `async` |
| **fetch**       | Appel HTTP moderne         | Nécessite `then` ou `await`         |

*/





