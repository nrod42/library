const cardSection = document.querySelector('.cardSection')

let myLibrary = [];

class Book {
    constructor(author, title, pages, readStatus) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

const book1 = new Book('JK Rowling', 'Harry Potter', 300, 'read');
const book2 = new Book('George RR Martin', 'Game of Thrones', 1000, 'read');

myLibrary.push(book1);
myLibrary.push(book2);

addCard();

//takes every book in the myLibrary array and creates a new "card" with all the info in it. Can be cleaned up and probably use a loop or something OR just anything to make the code look nicer
function addCard () {
    myLibrary.forEach(book => {
        card = document.createElement('div');
        card.classList.add("cards");

        titleSection = document.createElement('p');
        title = document.createTextNode(book.title);
        titleSection.appendChild(title);
        card.appendChild(titleSection);

        authorSection = document.createElement('p');
        author = document.createTextNode(book.author);
        authorSection.appendChild(author);
        card.appendChild(authorSection);

        pagesSection = document.createElement('p');
        pages = document.createTextNode(book.pages);
        pagesSection.appendChild(pages);
        card.appendChild(pagesSection);

        readStatusSection = document.createElement('p');
        readStatus = document.createTextNode(book.readStatus);
        readStatusSection.appendChild(readStatus);
        card.appendChild(readStatusSection);

        cardSection.appendChild(card)
    })
}

function showForm() {
    document.getElementById('newBookForm').style.display = 'block';
}

function hideForm() {
    document.getElementById('newBookForm').style.display = 'none';
}

function addBook(event) {
    author = event.target.elements.author.value;
    title = event.target.elements.title.value;
    pages = event.target.elements.pages.value;
    readStatus = event.target.elements.readStatus.value;

    book3 = new Book(author, title, pages, readStatus);
    myLibrary.push(book3);
    addCard();


    hideForm();
}


/*so,
1. Make a "NEW BOOK" button that brings up a form.
2. The form will ask for the author, title, pages, and read status
3. Take this info and input it into a new const 'bookX' = new Book(user inputs)
4. Take this new const and push it into the myLibrary array
5. Write a function that will loop through the myLibrary array.
6. for each item in the loop, take the info and add it to the cards (see below) 
7. Use grid like we did before to create 'cards' which will display each book
*/