import React from 'react';
import Book from '../Book/Book';
import style from './BookList.module.scss';
import { useState, useEffect } from 'react';
import { sortByValue, topFunction } from '../../service/book';

const BookList = ({libraryObject, sortingState, setBook, setView}) => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // topFunction();
    },[])
    const checkFunction = () => {
        console.log('working');
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
        alert('At the bottom!')
        }
      }

    return (
        <div className={style.container} onScroll={checkFunction}>
            {libraryObject.map((item, index) => <Book key={index} publisher={item.volumeInfo.publisher} id={item.id} title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} image={item.volumeInfo.imageLinks?.thumbnail} description={item.volumeInfo.description} averageRating={item.volumeInfo.averageRating} authors={item.volumeInfo.authors} setBook={setBook} setView={setView} pageCount={item.volumeInfo.pageCount} previewLink={item.volumeInfo.previewLink}/>)}
        </div>
    );
};

export default BookList;