import {React, useState, useEffect} from 'react';
import {useParams, useNavigate, NavLink} from 'react-router-dom';
import style from './BookPage.module.scss';
import { books, getBookById, addBook, getGlobalInfoById, checkBook, topFunction, cleanText } from '../../service/book';
import rabbit from '../../media/images/rabbit.gif'

const BookPage = ({savedBooks, updateSavedBooks}) => {
    const {id} = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [adding, setAdding] = useState(false);
    const [inCollection, setInCollection] = useState(false);

    useEffect(() => {
        topFunction();
        (async () => {
            try {
                setLoading(true);
                const thisBook = await getBookById(id);
                setBook(thisBook);
                const checkingCollection = await checkBook(id, savedBooks);
                setInCollection(checkingCollection);
                console.log(checkingCollection);
                setLoading(false);
            } catch (error) {
                setError('Something went wrong');
            }
        })();
        
        },[])

    const handleAddition = async () => {
        setAdding(true);
        const newCollection = await addBook(id, savedBooks);
        await updateSavedBooks(newCollection);
        setAdding(false);
        await console.log(newCollection);
        setInCollection(true);
    }

    return (
        <div className={style.container}>
            {loading && <><img src={rabbit} alt="" /><h1>Fetching Your Book</h1></>}
            {error && <div className={style.error}>{error}</div>}
            {book &&
            <>
            <div className={style.container__buttons}>
            <NavLink to='/books/'>Back to Books</NavLink>
            {adding && <p>Adding Book...</p>}
            {(!inCollection && !adding) && <button onClick={handleAddition}>Add to Collection</button>}
            {inCollection && <p>In Collection</p>}
            {book.previewLink? <a href={book.previewLink} target="_blank">Google Store Link</a>: null}
            </div>
            {book.imageLinks? <img src={book.imageLinks.thumbnail} alt="" />: <div className={style.container__image__none}>No image available.</div>}
            <h1>{book.title}</h1>
            {book.subtitle? <h2>{book.subtitle}</h2>:null}
            {book.authors? <h3>By {book.authors.join(', ')}</h3>: <h3>Unknown Author</h3>}
            {book.averageRating? <h5>Average Rating: {book.averageRating}</h5>: null}
            {book.description? <h5>{cleanText(book.description)}</h5>: null}
            {book.publisher? <h5>Published by {book.publisher}{book.publishedDate? <span> {book.publishedDate}</span>: null} </h5>: null}
            {book.pageCount? <h5>Pages: {book.pageCount}</h5>: null}
            </>
            }
    </div>
    );
};

export default BookPage;