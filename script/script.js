$(document).ready(show_cupcakes);

var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];

let customer_name = document.getElementById("customer-name");
let type = document.getElementById("Type");
let delivery = document.getElementById("delivery");
let allergies = document.getElementById("allergies");

function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions

  var table_body = $("#cupcake-table");
  table_body.empty();
  for (var i = 0; i < cup_cakes.length; i++) {
    let row1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerHTML = cup_cakes[i].calories;
    td1.style.color = "red";
    td2.innerHTML = cup_cakes[i].name;
    td3.innerHTML = cup_cakes[i].weight;

    row1.append(td2);
    row1.appendChild(td1);
    row1.appendChild(td3);
    table_body.append(row1);

    td1.style.color = "white";
    if (cup_cakes[i].calories == "high") {
      td1.style.backgroundColor = "red";
    } else if (cup_cakes[i].calories == "medium") {
      td1.style.backgroundColor = "orange";
    } else {
      td1.style.backgroundColor = "green";
    }
  }
}

function deliveryError(){
 delivery.style.color = "green";
 delivery.style.borderColor = "green";
 delivery.innerHTML = "Good";
}


let submit = document.getElementById("save-data");

submit.addEventListener("click", validate);
// submit.addEventListener("click",show_storage);
function validate() {
  let name = document.getElementById("customer-name");
  let count = document.getElementById("count");
  let allergies = document.getElementById("allergies");
  let delivery = document.getElementById("delivery");
  ///////////////////
  let name_error = document.getElementById("name-error");
  let type_error = document.getElementById("type_error");
  let count_error = document.getElementById("count_error");
    let delivery_error=document.getElementById("delivery_error");
    let allergies_error=document.getElementById("allergies_error");
  //write code that validates the form

  if (name.value.length < 6 || name.value.length > 16) {
    name_error.innerHTML = "The name must between 5 and 16 characters long ";
    name_error.style.color = "red";
    name.style.borderColor = "red";
  } else {
    name_error.innerHTML = "Good";
    name.style.borderColor = "green";
    name_error.style.color = "green";
    localStorage.setItem("customer-name", JSON.stringify(name));
  }

  if (count.value.length >= 1 && count.value.length <= 15) {
    count_error.innerHTML = "Good";
    count_error.style.color = "green";
  } else {
    count_error.innerHTML = "The count must between 1 and 10";
    count_error.style.color = "red";
  }

  if (type.value == "None") {
    type_error.innerHTML = "None isn't Accepted";
    type.style.borderColor = "red";
    type_error.style.color = "red";
  }
  else {
    type_error.innerHTML = "Good";
    type.style.borderColor = "green";
    type_error.style.color = "green";
  }

  if(delivery.value=="None"){
    delivery.style.borderColor="red";
    delivery.style.color="red";
    delivery.innerHTML="None isn't Accepted";
  }
    else{
   deliveryError();
  }
  if (delivery.value === "4:00pm" && type.value === "chocolate") {
    delivery_error.innerHTML="Sorry, we are closed at 4:00pm for chocolate cupcakes";
    delivery_error.style.color="red";
    delivery.style.borderColor="red";
  }
    else{
    delivery_error.innerHTML="Good";
    delivery_error.style.color="green";
    delivery.style.borderColor="green";
  }
    if (allergies.value === "nut-free" && type.value === "pecan") {
    allergies_error.innerHTML =
      "Sorry, we don't have pecan cupcakes and This type of cake is not nut-free";
   allergies_error.style.color = "red";
    allergies_error.borderColor = "red";
  }
    else{
    allergies_error.innerHTML="Good";
    allergies_error.style.color="green";
    allergies_error.borderColor="green";
  }

}

function show_storage() {
  let cus_name = $("#customer-name").val();
  let welcome = document.getElementById("welcome");
    cus_name = JSON.parse(localStorage.getItem("customer-name"));
    welcome.innerHTML = "Welcome " + cus_name;
}
