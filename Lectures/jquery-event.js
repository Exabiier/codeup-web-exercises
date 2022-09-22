$(function(){

    $('#clickMe').on('click', function(){
        alert('yo')
    });

    $('#create-an-element').on('click', function(){
        $(this).after("<button class='will'> Click</button>")
    })


})

//for on