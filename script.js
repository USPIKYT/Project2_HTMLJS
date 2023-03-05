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