let color = "purple"
let number = 10
let word = "cool"

$('.red').css("background-color", color)
$('.yellow').text(word)

if (number>100){
    console.log("whoah, that´s a big number");
} else
{console.log("just a regular number, please");
}

if (word="cool"){
    $('.aquamarine').text("Power of DOM");
} else { 
    $('.blue').text("Power of DOM");
}

