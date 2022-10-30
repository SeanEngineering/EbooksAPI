/** @format */

export const books = async (searchTerms, setSearch) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms
    .split(' ')
    .join('+')}&maxResults=40`;
  setSearch(url);
  const response = await fetch(url);
  const json = await response.json();
  return json.items;
};

export const nextPage = async () => {};

export const checkLength = (item) => {
  if (item !== undefined) {
    return item.length < 30 ? item : item.slice(0, 30) + '...';
  } else {
    return null;
  }
};

export const sortByValue = (arrayOfBooks, sortMethod) => {
  switch (sortMethod) {
    case 'name':
      return arrayOfBooks.sort((book1, book2) => {
        book2.volumeInfo.title.toLowerCase() -
          book1.volumeInfo.title.toLowerCase();
      });
    case 'ratingA':
      return arrayOfBooks.sort((book1, book2) => {
        if (!book1.volumeInfo.averageRating) {
          book1.volumeInfo.averageRating = 0;
        }
        if (!book2.volumeInfo.averageRating) {
          book2.volumeInfo.averageRating = 0;
        }
        return book1.volumeInfo.averageRating - book2.volumeInfo.averageRating;
      });
    case 'ratingD':
      return arrayOfBooks.sort((book1, book2) => {
        if (!book1.volumeInfo.averageRating) {
          book1.volumeInfo.averageRating = 0;
        }
        if (!book2.volumeInfo.averageRating) {
          book2.volumeInfo.averageRating = 0;
        }
        return -book1.volumeInfo.averageRating + book2.volumeInfo.averageRating;
      });
    case 'yearA':
      method = (book1, book2) =>
        book1.volumeInfo.publishedDate - book2.volumeInfo.publishedDate;
      break;
    case 'yearD':
      method = (book1, book2) =>
        book2.volumeInfo.publishedDate - book1.volumeInfo.publishedDate;
      break;
    default:
      return arrayOfBooks;
  }
};

export const getBookById = async (id) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.volumeInfo;
};

export const getGlobalInfoById = async (id) => {
  const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const addBook = async (id, collection) => {
  const thisBook = await getGlobalInfoById(id);
  const newCollection = [thisBook, ...collection];
  return newCollection;
};

export const checkBook = async (id, collection) => {
  const currentIds = await collection.map((item) => item.id);
  const inCollection = await currentIds.includes(id);
  return inCollection;
};

export const getRandomWord = async () => {};

export const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export const cleanText = (inputString) => {
  return inputString.replace(/(<([^>]+)>)/gi, ' ').replace(/&quot;/gi, '"');
};
