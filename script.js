// Select all spans within the .Allbtn container
let btn = document.querySelectorAll(".Allbtn span");
let string2 = "";
btn.forEach( (btn)=>{
  btn.addEventListener('click', e => {
    if (e.target.textContent === "Simple Alert") {
      alert("Yor function active due to click btn Simple Alert.")
    }
   else if (e.target.textContent === "Print my Name") {
      let inputs = document.querySelectorAll(".get-text"); // Select all elements with the  get-text
      let string = "";
    
        inputs.forEach(function(input) {
            string += input.value +" "+ "Ali "; // Concatenate the value of each input
        });
    
        console.log(string);
    
        let blanck = document.querySelector("#blanckbox");
        blanck.textContent = string.trim();
    }
    else if (e.target.textContent === "Print All City") {
    let cities = document.querySelectorAll("#box"); // Select all elements with the #box ID
    let string = "";

    cities.forEach(function(city) {
      string += city.textContent + " "; // Concatenate the text content of each city
    });

    let blanck = document.querySelector("#blanckbox");
    blanck.textContent = string.trim();
  }
    else if (e.target.textContent === "Add Your City") {
      let inputs = document.querySelectorAll(".get-text"); // Select all elements with the  get-text
      let string = "";
     
        inputs.forEach(function(input) {
           
            string += "8)"+input.value +" "+ "This is a new city. "; // Concatenate the value of each input
        });
     console.log(string);
      //   let elements=inputs
      //   elements.forEach(element => {
      //     element.style.fontWeight = "bold";
      // });
    
        let blanck = document.querySelector("#blanckbox");
        
        blanck.textContent = string.trim();
       
}
else if (e.target.textContent === "Generate Table") {
  let inputs = document.querySelector(".get-text");
  let a = parseInt(prompt("Enter your table length:")); // Convert input to an integer
  let table = ""; // Initialize the table string

  for (let i = 1; i <= a; i++) {
      table += inputs.value + " X " + i + " = " + i * parseInt(inputs.value) + "<br>"; // Concatenate each multiplication expression with a line break
  }

  let blanck = document.querySelector("#blanckbox");
  blanck.innerHTML = table; // Set the concatenated table string as the innerHTML of the blanckbox
}

 else {
       
      console.log("Every Thing is OK.")
     }
   
    })
    })
  
// Get the input element and Clear button
const input = document.getElementById("get-text");
const clearButton = document.querySelector(".input-clear");

// Add click event listener to the Clear button
clearButton.addEventListener("click", () => {
    // Set the value of the input field to an empty string
    input.value = "";
});


 // Get the Clear Output button and the blanckbox element
const clearOutputButton = document.querySelector('.clear-output');
const blanckbox = document.getElementById('blanckbox');

// Add click event listener to the Clear Output button
clearOutputButton.addEventListener('click', () => {
    // Set the content of the blanckbox element to an empty string
    blanckbox.textContent = '';
});
