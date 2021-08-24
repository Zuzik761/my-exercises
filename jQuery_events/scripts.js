/* $('.first').on('click', function() {
    $('.obr1').toggle()
} );

$('.second').on('click', function() {
    $('.obr2').slideToggle()
} );

$('.third').on('click', function() {
    $('.obr3').fadeOut()
} );

$('.fourth').on('click', function() {
    $('.obr4').html("Yeah, you clicked me")
} );
*/

$('.first').on('click', function() {
    $('.obr1').html("Yeah, you clicked me")
} );

$('.second').on('click', function() {
    $('.obr1').html("You click on the button 2, don´t you ?")
} );

$('.third').on('click', function() {
    $('button').css('background', 'yellow')
} );