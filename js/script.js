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

//---------- click event for invite button ----------
addGuestButton.addEventListener("click", function(){
  const guest = guestInput.value; // assigns guest to the input box vale
  // console.log(guest);
  if(guest !== ""){ //checks that input is not empty
    addToList();
    clearInput();
    updateGuestCount();
  }
})

//---------- document keydown event for invite button ----------
document.addEventListener("keydown", function(e){
  if(e.key === "Enter"){

// ADD CODE FROM CLICK EVENT BODY HERE

  }
})

//---------- function to clear text box ----------
const clearInput = function(){ 
  guestInput.value = "";
}

//---------- function to add name to guest list ----------
const addToList = function(){ 
  const guest = guestInput.value; // assigns guest to the input box vale
  const listItem = document.createElement("li"); //creates new list item
  listItem.innerText = guest; //assigns guest value to new list item
  guestList.append(listItem); //adds new list item to guest list
}

//---------- function to update guest count ----------
const updateGuestCount = function(){
  const guests = document.querySelectorAll(".guest-list li") //selects all list items
  guestCount.innerText = guests.length
  if(guests.length>=8){
    addGuestButton.classList.add("hide"); //hides invite button
    guestInput.classList.add("hide"); //hides text box
    guestInputLabel.classList.add("hide"); //hides invite button label
    guestFull.classList.remove("hide"); //shows guest list full message
  }
}