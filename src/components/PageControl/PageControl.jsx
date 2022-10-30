import {React, useState} from 'react';
import { books } from '../../service/book';
import style from './PageControl.module.scss';

const PageControl = ({pageNumber, setPageNumber, setBookList, search, setSearch, bookList}) => {
    const [loadingMore, setLoadingMore] = useState(false);

    const incrementPage = async () => {
        setLoadingMore(true);
        setPageNumber(pageNumber+40);
        const response = await fetch(`${search}&startIndex=${pageNumber}`);
        const json = await response.json();
       setBookList([...bookList,...json.items]);
       setLoadingMore(false);
    }


    return (
        <div>
            <button onClick={incrementPage}>{loadingMore? 'Loading':'Load More'}</button>
        </div>
    );
};

export default PageControl;