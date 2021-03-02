// practica de poo

class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`;
  }

  getAuthor(){
    return this.author
  }

  getGender(){
    return this.gender
  }
}

let books = []

while (books.length < 3) {

  let title = prompt("Introduce el titulo del libro " +(books.length+1) );
  let author = prompt("Introduce el autor del libro "+(books.length+1));
  let year = prompt("Introduce el año del libro "+(books.length+1))
  let gender = prompt("Introduce el genero del libro "+(books.length+1)).toLowerCase();

  if (
    title != '' &&
    author != '' &&
    !isNaN(year) &&
    year.length == 4 &&
    (gender == "aventura" || gender == "terror" || gender == "fantasia")
  ) {

    books.push( new Book(title,author,year,gender))
  }
}



const showAllBooks= ()=>{
  console.log(books);
}

showAllBooks()


const showAuthors=()=>{

  let authors=[]

  for (const book of books) {

    authors.push(book.getAuthor())
  }
  console.log(authors.sort())

}

showAuthors()



const showGender=()=>{

  const gender= prompt('introduce el genero a buscar')

 

  for (const book of books) {

    if(book.getGender()== gender){
      console.log(book.bookInfo);
    }
  }

}

showGender()
