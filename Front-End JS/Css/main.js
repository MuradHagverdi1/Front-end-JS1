'use strict'

var bckgrn = document.getElementById('first')
var date = new Date().getHours();
console.log(date);

if(date > 6) { 
    bckgrn.style.backgroundColor = 'black'
}
else if(date>12){
    bckgrn.style.backgroundColor = 'white'
}
else if(date > 19) {
    bckgrn.style.backgroundColor = 'gray'
}
else{
    bckgrn.style.backgroundColor = 'black'
}