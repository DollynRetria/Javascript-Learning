/*
Gestion des événements DOM :

Ajouter / retirer un événement :

| Méthode                 | Description           | Exemple                                      |
| ----------------------- | --------------------- | -------------------------------------------- |
| `addEventListener()`    | Attacher un événement | `btn.addEventListener('click', () => {})`    |
| `removeEventListener()` | Détacher un événement | `btn.removeEventListener('click', callback)` |


Types d'événements courants :

| Événement                      | Quand ?                     |
| ------------------------------ | --------------------------- |
| `click`                        | Clic sur un élément         |
| `dblclick`                     | Double clic                 |
| `mouseover` / `mouseout`       | Survol / sortie             |
| `mouseenter` / `mouseleave`    | Idem, mais sans propagation |
| `keydown`, `keyup`, `keypress` | Touche clavier              |
| `input`, `change`              | Champ modifié               |
| `submit`                       | Formulaire soumis           |
| `load`                         | Page ou ressource chargée   |
| `scroll`                       | Scroll dans une page        |
| `focus`, `blur`                | Champ activé / désactivé    |

 */



/*
5. Bonus : Propriétés des objets event

Quand tu gères un événement, tu peux accéder à l’objet event :

btn.addEventListener('click', function(event) {
  console.log(event.target); // Élément cliqué
  event.preventDefault();    // Empêche le comportement par défaut (ex: lien)
});


| Propriété                 | Description                         |
| ------------------------- | ----------------------------------- |
| `event.target`            | Élément qui a déclenché l’événement |
| `event.type`              | Type d’événement (`click`, etc.)    |
| `event.preventDefault()`  | Empêche le comportement par défaut  |
| `event.stopPropagation()` | Empêche la propagation              |



Exemple : 
<button id="btn">Clique-moi</button>
<div id="box"></div>

<script>
  const btn = document.getElementById("btn");
  const box = document.getElementById("box");

  btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Texte ajouté !";
    box.appendChild(p);
  });
</script>


 */