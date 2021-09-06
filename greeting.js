var today = new Date();
var hourNow = today.getHours();
var greeting;
var thanks= " Thanks for visiting our site."
if (hourNow > 18){
    greeting='Good evening!';
} else if (hourNow > 12){
    greeting='Good afternoon!';
} else if (hourNow > 0){
    greeting='Good morning!';
} else {
    greeting='Welcome!';
}

document.write('<h3>' + greeting.concat(thanks) + '</h3>');
