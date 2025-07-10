//Permet de séparer le code en fichiers réutilisables.
//Export :
// utils.js
export const PI = 3.14;
export function add(x, y) { return x + y; }

//Import :
import { PI, add } from './utils.js';
