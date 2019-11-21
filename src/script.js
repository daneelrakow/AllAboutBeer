//
// $(document).ready(function() {
//     $("#testButton").click(function(){
//         console.log("button pressed!")
//     });
// });
/*
 BREWERY DB DOCS
 /beer/:beerId/breweries lists brewery locations for a beerId
 /beer/:beerId/events Gets a listing of all events that a beer is at or has won awards at.


*/

var url = "https://sandbox-api.brewerydb.com/v2/"
var key = "/?key=6148072960b1d62f5fe9ce56b5bf28e9"

getAllBeers();



async function getRandomBeer(){
  var response = await fetch(url+"beer/random"+key)
  randomBeer = JSON.stringify(await response.json());
  console.log(JSON.parse(randomBeer)); //name also
  // console.log("Retired? "+randomBeer.data.isRetired)
  // console.log("Alchohol by volume: "+randomBeer.data.abv+"%");
  // console.log("Style: "+randomBeer.data.style.shortName); //use .name for full name
  // console.log("Description: "+randomBeer.data.style.description)

}


async function getBreweries(id){
  var breweries;
  var response = await fetch(url+"beer/"+id+"/breweries"+key)
  breweries = JSON.stringify(await response.json());
}

async function getAllBeers(){
    var beers;
    var response = await fetch(url+"beers"+key)
    beers = JSON.stringify(await response.json());
    console.log(JSON.parse(beers));
  }
