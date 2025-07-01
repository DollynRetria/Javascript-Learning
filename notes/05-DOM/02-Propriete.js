/*
Propriétés utiles des éléments DOM :

| Propriété                                                                               | Description                                          | Exemple                        |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------ |
| `innerHTML`                                                                             | Contenu HTML de l’élément                            | `elem.innerHTML = "<b>ok</b>"` |
| `textContent`                                                                           | Texte brut                                           | `elem.textContent = "Bonjour"` |
| `innerText`                                                                             | Texte visible (respecte CSS)                         | `elem.innerText = "Visible"`   |
| `value`                                                                                 | Valeur d’un champ `input`, `textarea`                | `input.value`                  |
| `href`, `src`, `id`, `className`, `name`                                                | Accès direct aux attributs                           | `link.href`, `img.src`         |
| `style`                                                                                 | Accès aux styles inline (`elem.style.color = "red"`) |                                |
| `classList`                                                                             | Gérer les classes (`add`, `remove`, etc.)            | `elem.classList.add("active")` |
| `parentElement`                                                                         | Élément parent                                       | `elem.parentElement`           |
| `children`                                                                              | Enfants directs (HTMLCollection)                     | `elem.children`                |
| `firstElementChild`, `lastElementChild`, `nextElementSibling`, `previousElementSibling` | Navigation DOM                                       |                                |

 */