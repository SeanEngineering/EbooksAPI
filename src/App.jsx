import Container from './components/Container/Container';
import BookList from './components/BookList/BookList';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import style from './globalStyle/App.module.scss';
import SortBy from './components/SortBy/SortBy';
import BookPage from './components/BookPage/BookPage';
import SavedBooksCollection from './components/SavedBooks/SavedBooksCollection';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import rabbit from './media/images/rabbit.gif';
import PageControl from './components/PageControl/PageControl';
import BookModal from './components/BookModal/BookModal';
import ViewContainer from './components/ViewContainer/ViewContainer';

function App() {
  const [bookList, setBookList] = useState([]);
  const [inProp, setInProp] = useState(false);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const nodeRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sortState, setSortState] = useState('');
  const [savedBooks, updateSavedBooks] = useState([]);
  const [currentBook, setBook] = useState({})
  const [view, setView] = useState(false);

  return (
    <div className={style.main}>
      <BrowserRouter>
        <Nav />
        <Header load={loading} setLoad={setLoading} stateChange={setBookList} setSearch={setSearch}/>
        {view && <ViewContainer setView={setView}><BookModal book={currentBook} setView={setView} savedBooks={savedBooks} updateSavedBooks={updateSavedBooks}/></ViewContainer>}
        {loading && <Container><img src={rabbit} /><h2>fetching books...</h2></Container>}
        <Routes className={style.main__body}>
          <Route
            path="/books"
            element={
              <Container className={style.main__loading}>
                {!loading && <>
                {/* {(bookList.length >1) && <SortBy sortingStateFunction = {setSortState} libraryObject={bookList} libraryObjectSet={setBookList}/>} */}
                <br />
                <BookList libraryObject={bookList} sortingState={sortState} setBook={setBook} setView={setView}/></>}
                <PageControl pageNumber={pageNumber} setPageNumber={setPageNumber} setBookList={setBookList} search={search} setSearch={setSearch} bookList={bookList}/>
                
              </Container>
            }
          />
           <Route
            path="/collection"
            element={
              <Container>
               {savedBooks.length == 0 && <h1>You have no saved books</h1>}
               {savedBooks.length >= 1 && <SavedBooksCollection savedBooks={savedBooks} updateSavedBooks={updateSavedBooks} currentBook={currentBook} setBook={setBook} setView={setView}/>}
              </Container>
            }
          />
          <Route
            path="/books/:id"
            element={
              <Container>
               <BookPage savedBooks={savedBooks} updateSavedBooks={updateSavedBooks}/>
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
