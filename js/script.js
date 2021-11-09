const griglia= document.getElementById("griglia")
let x= 0;

for (let i = 1; i <= 100; i++){
    if(i % 15 == 0 ){
        x ='fizzbuzz';
    } else if(i % 3 == 0) {
        x ='fizz';
    } else if(i % 5 == 0){
        x = 'buzz';
    } else{
        x = i;
    }
    griglia.innerHTML += `<div class="box">${x}</div>`
}