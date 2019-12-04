/*
TODO Refactor Code
TODO Change all P "buttons" to actual buttons
  Go back
  Another One
  etc...
TODO Docuement
TODO fix age verification
TODO footer css ask Austin
TODO implement about website page and go back button
TODO readme page
TODO refactor getRandomBeer and updateRandomBeer into one function
TODO fix go back button on main page
*/



const url = "https://sandbox-api.brewerydb.com/v2/" //base url for brewerydb api
const key = config.MY_KEY;

let userList = {} //list of all beers user adds to list
let theBeer; // global variable which store the current random beer

//This function calls BreweryDB and fetches a random beer.

async function getRandomBeer() {
  console.log("getRandomBeer() has been called.")
  let response = await fetch(url + "beer/random" + key)
  let randomBeer = await response.json();
  JSON.stringify(randomBeer);
  updateRandomBeer(randomBeer);
  console.log("getRandomBeer() has been completed.")
}

//changes the beer to the more advanved api beer request
async function updateRandomBeer(b) {
  let id = b.data.id
  console.log("Beer ID: "+id)
  let ren = await fetch(url + "beer/" + id + "/" + key)
  let c = await ren.json();
  JSON.stringify(c)

  console.log("Beer name: "+c.data.name);
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
  let learnMore = document.getElementById("randomlearnmore");
  let addToList = document.getElementById("addtolist");

  addToList.innerHTML = "Add to my list";
  anotherButton.innerHTML = "Another One";
  // backButton.innerHTML = "Go Back";

  if (beer.data.name) {
    name.innerHTML = beer.data.name
  } else {
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

  if (beer.data.isOrganic) {
    if (beer.data.isOrganic == "Y") {
      isOrganic.innerHTML = "This is an organic beer.";
      isOrganic.style.color = "green"
    } else if (beer.data.isOrganic == "N") {
      isOrganic.innerHTML = "This is not an organic beer.";
      isOrganic.style.color = "red"
    } else {
      console.log("There was an issue.")
      isOrganic.innerHTML = "";
    }
  } else {
    console.log("There was an issue.")
    isOrganic.innerHTML = "";
  }

  if (beer.data.isRetired) {
    if (beer.data.isRetired == "Y") {
      isSold.innerHTML = "This beer is no longer sold.";
      isSold.style.color = "red"
    } else if (beer.data.isRetired == "N") {
      isSold.innerHTML = "This beer is currently on sale.";
      isSold.style.color = "green"
    } else {
      console.log("There was an issue.")
      isSold.innerHTML = "";
    }
  } else {
    console.log("There was an issue.")
    isSold.innerHTML = "";
  }

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
  let additionalInfo = document.getElementById("randomadditionalinfo");
    let addToList = document.getElementById("addtolist");
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
  // backButton.innerHTML = "";
  additionalInfo.innerHTML = "";
  addToList.innerHTML = "";
}

function updateAddAdditionalInfo() {
  var additionalInfo = document.getElementById("randomadditionalinfo");
  additionalInfo.innerHTML = theBeer.data.style.description;
}

function addToList(){
  console.log("Adding beer to user list...")
  userList[theBeer.data.id] = theBeer;
  console.log(userList);
  alert(theBeer.data.name+" was successfully added to your list.")
}

function displayUserList(){
  let parent = document.getElementById("listBeer");

  Object.keys(userList).forEach(function(key){
    console.log(key, userList[key].data.name);
    let element = document.createElement('p');
    let name = document.createTextNode(userList[key].data.name);
    element.appendChild(name);
    parent.appendChild(element);
  })

  let backButton = document.getElementById("gobackbutton");
  backButton.innerHTML = "Go Back"
}

function clearUserListDisplay(){
  let parent = document.getElementById("listBeer");
  parent.innerHTML = "";
}

function download(filename, text) {
  let element = document.createElement('a');
  let d = new Date();
  let header = "Date: "+(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear()+"\nYour List \n"
  let usersList = header+"";

  Object.keys(userList).forEach(function(key){
    console.log(key, userList[key].data.name);
    usersList = usersList+"\n"+(userList[key].data.name);
  });

  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(usersList));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();

  document.body.removeChild(element);
}

function createAndDownloadFile(){
  console.log("createAndDownloadFile() has been called.");
  console.log("Downloading...");
  download("Your_List.txt", "info here");
  console.log("File downloaded.");
}
