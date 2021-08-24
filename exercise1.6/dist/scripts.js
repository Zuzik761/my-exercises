/* $('body').append(
    '<p>přidala jsem append na konec body</p1>'
  ); 

$('h2').append(
    '<p>přidala jsem append</p>'
  ); 

$('body').before(
    '<p>přidala jsem before</p>'
  ); 
  */

let names = ['Zuzka', 'Eva', 'Martin', 'Miroslav'];

$('ul').append(
    names
  ); 


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('h1').after(
    additionalBlock.title
    );  

$('body').append(
    additionalBlock.text
    ); 


       