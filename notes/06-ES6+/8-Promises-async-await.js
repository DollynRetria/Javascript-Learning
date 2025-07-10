//Gère les opérations asynchrones.
//Promises :
fetch('url').then(res => res.json()).then(data => console.log(data));


//Async/Await
async function getData() {
  const res = await fetch('url');
  const data = await res.json();
  console.log(data);
}
