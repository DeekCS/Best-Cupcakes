$(document).ready(show_cupcakes);

var cup_cakes=[
    {"name":"Chocolate","calories":"high","weight":"200gm"},
    {"name":"Carrot","calories":"medium","weight":"150gm"},
    {"name":"Banana","calories":"high","weight":"200gm"},
    {"name":"Strawberry","calories":"low","weight":"160gm"},
    {"name":"Peanut","calories":"medium","weight":"200gm"}
];

let customer_name = document.getElementById("customer-name");


function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions

    var table_body = $("#cupcake-table");
    table_body.empty();
    for(var i=0;i<cup_cakes.length;i++){
        let row1 = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.innerHTML=cup_cakes[i].calories;
        td1.style.color="red";
        td2.innerHTML=cup_cakes[i].name;
        td3.innerHTML=cup_cakes[i].weight;

        row1.append(td2);
        row1.appendChild(td1);
        row1.appendChild(td3);
        table_body.append(row1);
    
        td1.style.color="white";
        if(cup_cakes[i].calories=="high"){
            td1.style.backgroundColor="red";
        }
        else if(cup_cakes[i].calories=="medium"){
            td1.style.backgroundColor="orange";
        }
        else{
            td1.style.backgroundColor="green";
        }

        
    }

    $("#save-data").click(function () {
      //write code to save the cupcakes to local storage
      let name = $("#customer-name").val();
      localStorage.setItem("customer-name", JSON.stringify(name));
      alert("Saved");
    });



}





function validate(){
    //write code that validates the form

    var name=$("#name").val();
    var calories=$("#calories").val();
    var weight=$("#weight").val();

    if(name==""){
        alert("Name is required");
        return false;
    }
    if(calories==""){
        alert("Calories is required");
        return false;
    }
    if(weight==""){
        alert("Weight is required");
        return false;
    }
    return true;


    
}
function show_storage(){
    let welcome = document.getElementById("welcome");
    //write code that shows the name from local storage
    let name=localStorage.getItem("customer-name");
    // alert(name);
    user_name=JSON.parse(name);
    welcome.innerHTML = "Welcome " + user_name;
}