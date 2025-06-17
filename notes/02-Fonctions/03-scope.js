//Scope (Portée des variables)
//Exemple avec var, let, const :

function testScope() {
  var a = 1;       // portée fonctionnelle
  let b = 2;       // portée bloc
  const c = 3;     // portée bloc

  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("Dans bloc:", a, b, c); // 10, 20, 30
  }

  console.log("En dehors:", a, b, c); // 10, 2, 3
}

testScope();


//var ignore les blocs, contrairement à let et const.