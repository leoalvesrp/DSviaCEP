import RequestException from "./exeptions/request-exeptions.js"

export async function getJason(url){
  try{
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
  }
  catch(e){
    throw new RequestException("Erro ao realizar requisição")
  }
}