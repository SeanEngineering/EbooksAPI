import React from 'react';
import {sortByValue} from '../../service/book';

const SortBy = ({sortingStateFunction, libraryObject, libraryObjectSet}) => {
    const changeSortState = (e) =>{
        const newArray = [...libraryObject];
        
        libraryObjectSet(sortByValue(newArray, e.target.value));
        console.log('complete')
    }

    return (
        <>
        <label htmlFor="sortBy">Sort By</label>
        <select onChange={changeSortState} name="SortBy" id="">
            <option value="">Null</option>
            <option value="name">Name</option>
            <option value="ratingA">Rating Ascending</option>
            <option value="ratingD">Rating Descending</option>
            <option value="yearA">Release Year Ascending</option>
            <option value="yearD">Release Year Descending</option>
        </select>
        </>
    );
};

export default SortBy;
