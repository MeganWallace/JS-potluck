// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// assign dish button
const assignButton = document.querySelector(".assign");
// unordered list
const assignedItems = document.querySelector(".assigned-items");

//======================= GUEST LIST =======================
//---------- click event for invite button ----------
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value; //assigns guest to the input box vale
  // console.log(guest);
  if (guest !== "") { //checks that text input is not empty
    addToList(guest); //adds text input to list
    updateGuestCount(); //updates guest counter
    clearInput(); //clears text box
  }
})

//---------- document keydown event for invite button ----------
document.addEventListener("keydown", function (e) {
  const guest = guestInput.value; //assigns guest to the input box vale

  if (e.key === "Enter") { //triggers if enter key is pushed
    if (guest !== "") { //checks that text input is not empty
      addToList(guest); //adds text input to list
      updateGuestCount(); //updates guest counter
      clearInput(); //clears text box
    }
  }
})

//---------- function to clear text box ----------
const clearInput = function () {
  guestInput.value = "";
}

//---------- function to add text input to guest list ----------
const addToList = function (guest) {
  const listItem = document.createElement("li"); //creates new list item
  listItem.innerText = guest; //assigns guest value to new list item
  guestList.append(listItem); //adds new list item to guest list
}

//---------- function to update guest count ----------
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li"); //selects all list items
  guestCount.innerText = guests.length; //sets counter to list length value

  if (guests.length >= 8) {
    addGuestButton.classList.add("hide"); //hides invite button
    guestInput.classList.add("hide"); //hides text box
    guestInputLabel.classList.add("hide"); //hides invite button label
    guestFull.classList.remove("hide"); //shows guest list full message
  }
}

//======================= ASSIGNED DISHES LIST =======================
//---------- function to assign dishes ----------
const assignItems = function () {
  const potluckItems = ["Peach and Prosciutto Bruschetta",
    "Tomato & Mozzarella Caprese Skewers",
    "Pesto Pasta Salad",
    "Sweet and Salty Watermelon Fruit Salad",
    "Avocado Tomato Salad",
    "White Gazpacho",
    "Seasonal Fruit Chaat",
    "Watermelon Salad with Feta & Mint",
    "Lemon-Garlic Whipped Feta with Pesto",
    "Easy No-Bake Cheesecake",
    "Summer Peach and Tahini Tart",
    "The Ultimate Grilled Zucchini Salad"];
  const allGuests = document.querySelectorAll(".guest-list li"); //selects all guests
  for (let guest of allGuests) { //loops through each guest
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length); //generates a random number between 0 and item list length (12)
    let randomPotluckItem = potluckItems[randomPotluckIndex]; //sets value to the item at the random index

    let listItem = document.createElement("li"); //creates new list item
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    //use .innerText to grab the list item value. without it the actual list element would be targeted
    assignedItems.append(listItem); //adds new list item to assignment list

    potluckItems.splice(randomPotluckIndex, 1); //removes item from array so it can't be assigned again
  }
}

//---------- click event for assign dish button ----------
assignButton.addEventListener("click", function () {
  assignItems(); //assigns dishes
  assignButton.disabled = true; //disables button after code has run so a second set of dishes can't be assigned
})