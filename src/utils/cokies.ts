import Cookie from "js-cookie";


export const getCookie = (name: string) => {
  return Cookie.get(name);
}; 

export const saveCookie = (name: string, value:string) => {
    Cookie.set(name, value); 
}
