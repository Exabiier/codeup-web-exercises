(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // const person = {};
    // person.firstname = "Rick"
    // person.lastname = "Sanchez"
    //
    // console.log(person.firstname)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    const person = {
        firstname: "Rick",
        lastname: "Sanchez",
        sayHello: function (){
            console.log(`Hello from ${this.firstname} ${this.lastname}`)
        }

    }
    console.log(person.sayHello());





    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function  ( shopper){
        if(shopper.amount > 200){
            console.log(`${shopper.name}  started with $${shopper.amount} and was given a discount of ${shopper.amount*.12} and total cost was $ ${shopper.amount*(1-.12)} `);
        } else {
            console.log(`${shopper.name}  final price will be ${shopper.amount} with no dicount.`)

        }

    })





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: "1984",
            author: {
                firstname: "George",
                lastname: "Orwell"
        }
        },
        {title: "To Kill a Mockingbird", author: {firstname: "Harper", lastname: "Lee"}},
        {title: "The Great Gatsby", author: {firstname: "F.Scott" , lastname: "Fitzgerald"}},
        {title: "Pride and Predudice", author: {firstname: "Jane" , lastname: "Austen"}},
        {title: "Little Women", author: {firstname: "Louisa" , lastname: "Alcott"}}


    ]

    // books.forEach(function(books){
    //     console.log( `The ${books.title} is by ${books.author.firstname} ${books.author.lastname}`)
    //
    // })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(books, number){
        console.log( `Book #${number + 1} \nTitle: ${books.title} \nAuthor: ${books.author.firstname} ${books.author.lastname}\n...........`)

    })





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, firstname, lastName){
        return{
            title: title,
            author: {
                firstname: firstname,
                lastName: lastName

            }
        }
    }

    books.push(createBook("The Great Gatsby", "F. Scott", "Fitzgerald"));

})();

function showBookInfo(book){
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author.firstNam} ${book.author.lastName}`);
    console.log(`---`);
}