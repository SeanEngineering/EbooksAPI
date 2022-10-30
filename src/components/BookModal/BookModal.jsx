import {React, useState, useEffect} from 'react';
import {useParams, useNavigate, NavLink} from 'react-router-dom';
import style from './BookModal.module.scss';
import { books, getBookById, addBook, getGlobalInfoById, checkBook, topFunction, cleanText } from '../../service/book';
import rabbit from '../../media/images/rabbit.gif'

const BookPage = ({savedBooks, updateSavedBooks, book, setView}) => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [adding, setAdding] = useState(false);
    const [inCollection, setInCollection] = useState(false);

    useEffect(() => {
        topFunction();
        (async () => {
            try {
                setLoading(true);
                const checkingCollection = await checkBook(book.id, savedBooks);
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
        updateSavedBooks([...savedBooks, book]);
        console.log(book);
        setAdding(false);
        setInCollection(true);
    }




    return (
        <div className={style.container} onClick={(e)=>e.stopPropagation()}>
            <div className={style.container__buttons}>
            <button onClick={()=>setView(false)} >Back to Books</button>
            {adding && <p>Adding Book...</p>}
            {(!inCollection && !adding) && <button onClick={handleAddition}>Add to Collection</button>}
            {inCollection && <p>In Collection</p>}
            </div>
            <>
            {book.image? <img src={book.image} alt="" />: <div className={style.container__image__none}>No image available.</div>}
            <h1>{book.title}</h1>
            {book.subtitle? <h2>{book.subtitle}</h2>:null}
            {book.authors? <h3>By {book.authors.join(', ')}</h3>: <h3>Unknown Author</h3>}
            {book.averageRating? <h5>Average Rating: {book.averageRating}</h5>: null}
            {book.description? <h5>{cleanText(book.description)}</h5>: null}
            {book.publisher? <h5>Published by {book.publisher}{book.publishedDate? <span> {book.publishedDate}</span>: null} </h5>: null}
            {book.pageCount? <h5>Pages: {book.pageCount}</h5>: null}
            {book.previewLink? <a href={book.previewLink} target="_blank">Google Store Link</a>: null}
            </>
    </div>
    );
};

export default BookPage;