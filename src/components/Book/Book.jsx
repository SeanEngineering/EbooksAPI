import React from 'react';
import style from './Book.module.scss';
import {checkLength} from '../../service/book';
import { NavLink } from 'react-router-dom';

const Book = ({id, title, subtitle, image, averageRating, authors, setBook, setView, description, publisher, pageCount, previewLink}) => {
    const averageRatingTree = [
        'lightgray',
        '#E76C53',
        '#EFD077',
        '#26948B',
        '#0099A9',
        '#00FCA8',
      ];

    const newTitle = checkLength(title);
    const subTitle = checkLength(subtitle);
    // const authorProcessed = (authors ? checkLength(authors.join(', ')) : 'unknown author');
    const authorProcessed = (authors ? checkLength(authors.join(' ')) : '...');
    const coRating = (averageRating ? parseInt(Math.round(averageRating)) : 0);

    const updateBook = () =>{
        const thisBook = {id, title, subtitle, image, averageRating, authors, description, pageCount, publisher, previewLink}
        console.log(image)
        setBook(thisBook);
        setView(true);
    }

    return (
        // <NavLink to={`/books/${id}`}>
            <div className={style.container} style={image? {backgroundImage:` url(${image})`}:{backgroundColor: averageRatingTree[coRating]}} onClick={updateBook}>
                {/* {image? <img src={image} alt="" /> : <div className={style.container__image__none}>No image available.</div>} */}
                <div className={style.container__info}>
                    <h3 className={style.container__info__title}>{newTitle} {subTitle ? `: ${subTitle}` : null}</h3>
                    <div className={style.container__info__author}>by {authorProcessed}</div>
                </div>
            </div>
        // </NavLink>
    );
};

export default Book;