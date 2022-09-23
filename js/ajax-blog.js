let $blogs = $('#posts');

$.ajax({
    dataType: "json",
    type: 'GET',
    url: '/data/blog.JSON',
    success: function(blogs){
        $.each(blogs, function(i, blogs){
            $blogs.append('<h1 class="justify-content-center">'+ blogs.title + '</h1>'
            + '<p>' + blogs.content  + '</p>' +'<p> Catiegories: ' + blogs.categories +'</p>'+ '<p> Date: '+ blogs.date +'</p>')
        })
    }
})

// (function() {
//     $.ajax("data/blog.json").done(function (data) {
//         data.forEach(function (blog) {
//             let rowTable =
//                 <tr class="container justify-content-center">
//                     <th>${blog.title}</th>
//                     <td>${blog.content}</td>
//                     {/*<td>${blog.categories}</td>*/}
//                     <td>${blog.date}</td>
//                 </tr>
//             ;
//             $("#posts").append(rowTable);
//             // console.log(tool)
//         });
//     });
// })();