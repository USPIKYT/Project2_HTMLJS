let input = document.querySelector(".year_birth")
let button = document.querySelector(".fa-search")
let result = document.querySelector(".birth_result")
button.addEventListener("click", function(){
    if(input.value % 4 == 0){
        result.innerHTML = "Ви народились в високосний рік!"
        result.style.color = "green"
    } else{
        result.innerHTML = "Ви народились не в високосний рік!"
        result.style.color = "red"
        result.style.fontWeight = "bold"
    }
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// C
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }