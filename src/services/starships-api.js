
export async function getAllStarships(){
 let url = `https://swapi.dev/api/starships/`
 let response = await fetch(url)
 let data = await response.json()
 //console.log(data)
 return data
 
}

