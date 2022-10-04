// REST means represnta


// https://glitch.com/receptive-brief-sandpaper

// the R in CRUD: Read
const API1 = "https://receptive-brief-sandpaper.glitch.me/movies"
const API2 = "https://receptive-brief-sandpaper.glitch.me/books"

function getMovies(){
    fetch(`${API1}`).then(res => res.json()).then(e => console.log(e));
}

getMovies();

//the C in CRUD: Create

const bookToPost = {
    title: "Eleanor of Aquitaine",
    author: {
        firstName: "ralph",
        lastName: "Tunner"
    }
}
const postOptions = {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(bookToPost)

}

function getBooks(){
    fetch(`${API2}`).then(resp => resp.json()).then(e => console.log(e))
}

getBooks();

//the U in CRUD: updating with PUT AND PATCH
//We'll

let modify = {
    title: "eleanor of Aquitaine: Queen"
}

const patchOptions = {
    method: 'PATCH',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(bookToPost)

}

// fetch(`${API}/1`,patchOptions).then(getBooks);

modify = {
    title: "Eleanor of Aquitaine and the Four",
    author:{
        firstName: "Amy",
        lastName: "Kelly"
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(bookToPost)

}

fetch(`${API2}/1`, putOptions).then(getBooks);

//The D in CRUD -- Delete

const deleteOptions = {
    method: "DELETE",
    headers: {
        'content-Type' : 'application/json'
    }
}

fetch(`${API2}/1`, deleteOptions).then(getBooks);








