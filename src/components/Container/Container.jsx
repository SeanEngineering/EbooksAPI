import React from 'react';
import Search from '../Search/Search';
import style from './Container.module.scss';


const Container = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default Container;