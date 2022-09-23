// $('h1').click(function(){
//     alert('the DOM')
// })
//
// // $('.codeup').css('border', '1px solid red')
//
// $('li').css('font-size', '20px')
//
// $('h1, p, li').css('background-color', '#FFFF00')

$('h1').on('click',function(){
    $(this).css('background-color','hotpink')
})

$('p').on('dblclick', function(){
    $(this).css('font-size','18px')
})

$('li').hover( function(){
    $(this).css("color", "yellow")},
    function(){
    $(this).css("color", "black");
    });

//how to use the new way of hover.
//how do you do thekonami code exercise


