export async function getAccounts (){

  const response = await fetch("https://api.npoint.io/97d89162575a9d816661");
  const data = await response.json();

  console.log(data, "la data account");

  return(data)
}