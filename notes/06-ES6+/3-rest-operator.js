//Capture les valeurs restantes.
//1-Tableau
const [first, ...others] = [1, 2, 3];


//2-Fonction
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
