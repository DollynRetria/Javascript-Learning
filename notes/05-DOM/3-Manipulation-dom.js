/*
Modifier / ajouter / supprimer :

| Méthode            | Description                          | Exemple                              |
| ------------------ | ------------------------------------ | ------------------------------------ |
| `createElement()`  | Créer un nouvel élément DOM          | `document.createElement('div')`      |
| `createTextNode()` | Créer un texte                       | `document.createTextNode('Bonjour')` |
| `appendChild()`    | Ajouter un enfant à un parent        | `parent.appendChild(child)`          |
| `prepend()`        | Ajouter au début                     | `elem.prepend(nouveau)`              |
| `append()`         | Ajouter (élément ou texte)           | `elem.append('Texte')`               |
| `insertBefore()`   | Insérer avant un élément existant    | `parent.insertBefore(newEl, refEl)`  |
| `removeChild()`    | Supprimer un enfant                  | `parent.removeChild(elem)`           |
| `replaceChild()`   | Remplacer un enfant                  | `parent.replaceChild(newEl, oldEl)`  |
| `cloneNode(true)`  | Cloner un élément (avec ses enfants) | `clone = el.cloneNode(true)`         |

 */