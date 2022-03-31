const cardSection = document.querySelector('.cardSection');
const newBookForm = document.getElementById('newBookForm');
const addBookBtn = document.querySelector('.addBookBtn');
const cancelBtn = document.querySelector('.cancelBtn');

let myLibrary = [];

class Book {
    constructor(author, title, pages, readStatus) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

addBookBtn.addEventListener('click', showForm)
cancelBtn.addEventListener('click', hideForm)
newBookForm.addEventListener('submit', addBook)

function showForm() {
    document.getElementById('newBookForm').style.display = 'block';
}

function hideForm() {
    document.getElementById('newBookForm').style.display = 'none';
    newBookForm.author.value = "";
    newBookForm.title.value = "";
    newBookForm.pages.value = "";
    newBookForm.readStatus.checked = false;
}

function addBook(e) {
    e.preventDefault();
    author = newBookForm.author.value;
    title = newBookForm.title.value
    pages = newBookForm.pages.value;
    readStatus = newBookForm.readStatus.checked == true ? "Read" : "Unread";
    myLibrary.push(new Book(author, title, pages, readStatus));
    addCard();
    hideForm();
}

//Always adds latest book in the myLibrary array and adds a new card for it on the book grid.
function addCard () {
    newBook = myLibrary.slice().pop();
    createCard(newBook);
}

function removeCard(e) {
    card = e.target.parentElement;
    card.remove();
}

//given any book object, a card is created with all relevent info on it as well as a delete button
function createCard (book) {
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

    deleteBtn = document.createElement('button');
    deleteBtn.classList.add("deleteBtn");
    deleteBtnText = document.createTextNode('Remove');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.addEventListener('click', removeCard)
    card.appendChild(deleteBtn);

    cardSection.appendChild(card)
}