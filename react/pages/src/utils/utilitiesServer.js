import React from "react";
import regeneratorRuntime from "regenerator-runtime";

export async function XactiPost(url, data){
  const response = await fetch(url,  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}
const nactiPost = async (data) =>{
  const response = await fetch(data.url,  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  return await response.json();
};

export async function nactiDelete(url){
  const response = await fetch(url,  {
    method: "DELETE"
  });
  return await response.json();
}
export async function nactiPut(url, data){
  const response = await fetch(url,  {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}
export async function pridejKontakty(url){
  const response = await fetch(url,  {
    method: "POST"
  });
  return await response.json();
}
export async function nactiGet(url){
  const response = await fetch(url,  {
    method: "GET"
  });
  return await response.json();
}