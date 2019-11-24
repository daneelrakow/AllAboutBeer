const url = "https://sandbox-api.brewerydb.com/v2/"
const key = config.MY_KEY;


var theBeer;
//gets a random beer
async function getRandomBeer() {
  var response = await fetch(url + "beer/random" + key)
  let randomBeer = await response.json();
  JSON.stringify(randomBeer);
  updateRandomBeer(randomBeer);
}

//changes the beer to the more advanved api beer request
async function updateRandomBeer(b) {
  let id = b.data.id
  console.log(id)
  var ren = await fetch(url + "beer/" + id + "/" + key)
  let c = await ren.json();
  JSON.stringify(c)

  console.log(c.data.name);
  updateRandomBeerHTML(c);
}

//updates the html with the information from the api request
function updateRandomBeerHTML(beer) {
  console.log(beer);
  theBeer = beer;
  let image = document.getElementById("randompicture");
  let id = beer.data.id;
  let name = document.getElementById("randombeername");
  let abv = document.getElementById("randomabv");
  let style = document.getElementById("randomstyle");
  let category = document.getElementById("randomcategory");
  let header = document.getElementById("descriptionheader");
  let foodPairings = document.getElementById("randomfoodpairings");
  let description = document.getElementById("randomdescription");
  let isOrganic = document.getElementById("randomisorganic");
  let isSold = document.getElementById("randomissold");
  let anotherButton = document.getElementById("another");
  let backButton = document.getElementById("gobackbutton");
  let learnMore = document.getElementById("randomlearnmore")
  if (beer.data.name){
    name.innerHTML = beer.data.name
  }else {
    name.innerHTML = "There was an error. Please click \"Another\" or \"Go Back\""
  }




  if (beer.data.abv) {
    abv.innerHTML = "Alchohol by Volume: " + beer.data.abv + "%";
  } else {
    abv.innerHTML = ""
  }

  style.innerHTML = "Style: " + beer.data.style.shortName;
  category.innerHTML = "Category: " + beer.data.style.category.name;
  learnMore.innerHTML = "Click here to learn more about this category or style."

  if (!beer.data.foodParings) {
    foodPairings.innerHTML = "";
  } else {
    foodPairings.innerHTML = beer.data.foodParings;
    description.innerHTML = beer.data.description;
  }

  //checks if value is null or undefined
  if (!beer.data.description) {
    header.innerHTML = "";
  } else {
    header.innerHTML = "Description"
    description.innerHTML = beer.data.description;
  }

  if (beer.data.isOrganic){
    if (beer.data.isOrganic == "Y"){
      isOrganic.innerHTML = "This is an organic beer.";
      isOrganic.style.color = "green"
    }else if (beer.data.isOrganic == "N"){
      isOrganic.innerHTML = "This is not an organic beer.";
      isOrganic.style.color = "red"
    }else {
      console.log("There was an issue.")
      isOrganic.innerHTML = "";
    }
  }else {
    console.log("There was an issue.")
    isOrganic.innerHTML = "";
  }

  if (beer.data.isRetired){
    if (beer.data.isRetired == "Y"){
      isSold.innerHTML = "This beer is no longer sold.";
      isSold.style.color = "red"
    }else if (beer.data.isRetired == "N"){
      isSold.innerHTML = "This beer is currently on sale.";
      isSold.style.color = "green"
    }else {
      console.log("There was an issue.")
      isSold.innerHTML = "";
    }
  }else {
    console.log("There was an issue.")
    isSold.innerHTML = "";
  }

  anotherButton.innerHTML = "Another One";
  backButton.innerHTML = "Go Back";


}

//resets all the html in the random beer part
//add anything added above this this as well
function clearRandomInformation() {
  let name = document.getElementById("randombeername");
  let abv = document.getElementById("randomabv");
  let style = document.getElementById("randomstyle");
  let category = document.getElementById("randomcategory");
  let header = document.getElementById("descriptionheader");
  let foodPairings = document.getElementById("randomfoodpairings");
  let description = document.getElementById("randomdescription");
  let isOrganic = document.getElementById("randomisorganic");
  let isSold = document.getElementById("randomissold");
  let anotherButton = document.getElementById("another");
  let backButton = document.getElementById("gobackbutton");
  var additionalInfo = document.getElementById("randomadditionalinfo");
  name.innerHTML = "";
  abv.innerHTML = "";
  style.innerHTML = "";
  category.innerHTML = "";
  description.innerHTML = "";
  header.innerHTML = "";
  foodPairings.innerHTML = "";
  description.innerHTML = "";
  isOrganic.innerHTML = "";
  isSold.innerHTML = "";
  anotherButton.innerHTML = "";
  backButton.innerHTML = "";
  additionalInfo.innerHTML = "";

}


async function getBreweries(id) {
  var breweries;
  var response = await fetch(url + "beer/" + id + "/breweries" + key)
  breweries = JSON.stringify(await response.json());
}

async function getAllBeers() {
  var beers;
  var response = await fetch(url + "beers" + key)
  beers = JSON.stringify(await response.json());
  console.log(JSON.parse(beers));
}

function updateAddAdditionalInfo(){
  var additionalInfo = document.getElementById("randomadditionalinfo");
  additionalInfo.innerHTML = theBeer.data.style.description;
}
