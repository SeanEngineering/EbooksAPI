import Book from '../Book/Book';
import style from './SavedBooksCollection.module.scss';
import { useEffect } from 'react';
import { topFunction } from '../../service/book';

const SavedBooksCollection = ({savedBooks, updateSavedBooks, setBook, setView}) => {
    useEffect(() =>{
        topFunction();
    },[])

    return (
        <div className={style.container}>
            {savedBooks.length >= 1 && savedBooks.map((item, index) => <Book key={index} id={item.id} title={item.title} subtitle={item.subtitle} image={item.image} description={item.description} averageRating={item.averageRating} authors={item.authors} publisher={item.publisher} pageCount={item.pageCount} setBook={setBook} setView={setView} previewLink={item.previewLink}/>)}
        </div>
    );
};

export default SavedBooksCollection;