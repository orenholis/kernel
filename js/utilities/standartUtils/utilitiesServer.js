/**
 * nactiPost načítá funkce na serveru které jsou POST
 * @param  {string} url  url funkce na servru
 * @param  {object} data data která se posílají na server
 * @return {object}      vrácená data ze serveru
 */
async function nactiPost(url, data){
  if(!url){
    throw new Error("Není zadána url - utilityServer.js(9) [nactiPost()]");
  }
  if(!data){
      throw new Error("Nejsou zadána data - utilityServer.js(12) [nactiPost()]");
  }
  const response = await fetch(url,  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  return await response.json();
}
/**
 * nactiDelete načítá funkce na servru které jsou DELETE
 * @param  {string} url  url funkce na servru
 * @return {object}      vrácená data ze serveru
 */
async function nactiDelete(url){
  if(!url){
    throw new Error("Není zadána url - utilityServer.js(30) [nactiDelete()]");
  }
  const response = await fetch(url,  {
    method: "DELETE"
  })
  return await response.json();
}
/**
 * nactiPut načíta funkce na servru které jsou PUT
 * @param  {string} url  url funkce na servru
 * @param  {object} data data která se posílají na server
 * @return {object}      vrácená data ze serveru
 */
async function nactiPut(url, data){
  if(!url){
    throw new Error("Není zadána url - utilityServer.js(45) [nactiPut()]");
  }
  if(!data){
      throw new Error("Nejsou zadána data - utilityServer.js(48) [nactiPut()]");
  }
  const response = await fetch(url,  {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  return await response.json();
}
/**
 * posliObrazekDB posílá obrázek do DB
 * @param  {string} url  url funkce na servru
 * @param  {object} data data která se posílají na server
 * @return {object}      vrácená data ze serveru
 */
async function posliObrazekDB(url, data){
  if(!url){
    throw new Error("Není zadána url - utilityServer.js(67) [posliObrazekDB()]");
  }
  if(!data){
      throw new Error("Nejsou zadána data - utilityServer.js(70) [posliObrazekDB()]");
  }
  const response = await fetch(url,  {
    method: "POST",
    body: data,
  })
  return await response.json();
}

/**
 * posliObrazekDB posílá obrázek do DB
 * @param  {string} url  url funkce na servru
 * @param  {object} data data která se posílají na server
 * @return {object}      vrácená data ze serveru
 */
async function nactiImg(url, data){
  if(!url){
    throw new Error("Není zadána url - utilityServer.js(87)");
  }
  if(!data){
      throw new Error("Nejsou zadána data - utilityServer.js(90)");
  }
  const response = await fetch(url,  {
    method: "POST",
    body: data,
  })
  return await response;
}
