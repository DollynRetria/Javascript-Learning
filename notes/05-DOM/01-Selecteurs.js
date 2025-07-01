/**
 Sélecteurs DOM (rechercher un élément)
 Sélecteurs classiques :

| Méthode                             | Description                                   | Exemple                                  |
| ----------------------------------- | --------------------------------------------- | ---------------------------------------- |
| `document.getElementById()`         | Sélectionne un élément par son ID             | `document.getElementById('id')`          |
| `document.getElementsByClassName()` | Par classe (HTMLCollection)                   | `document.getElementsByClassName('btn')` |
| `document.getElementsByTagName()`   | Par balise                                    | `document.getElementsByTagName('div')`   |
| `document.querySelector()`          | 1er élément qui correspond à un sélecteur CSS | `document.querySelector('.box')`         |
| `document.querySelectorAll()`       | Tous les éléments qui correspondent           | `document.querySelectorAll('ul li')`     |

Résultat :
getElementById() → élément unique

getElementsByClassName() / getElementsByTagName() → HTMLCollection

querySelectorAll() → NodeList
 */