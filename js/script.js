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

//---------- function to add name to guest list ----------
const addToList = function(){ 
  const guest = guestInput.value; // assigns guest to the input box vale
  const listItem = document.createElement("li"); //creates new list item
  listItem.innerText = guest; //assigns guest value to new list item
  guestList.append(listItem); //adds new list item to guest list
}

//---------- function to clear text box ----------
const clearInput = function(){ 
  guestInput.value = "";
}

//---------- document keydown event for guest button ----------
document.addEventListener("keydown", function(e){
  const guest = guestInput.value;
  if(e.key === "Enter"){
    if (guest !== ""){
      addToList();
      clearInput();
    }
  }
})