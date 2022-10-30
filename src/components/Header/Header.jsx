
import React from 'react';
import style from './Header.module.scss';
import logo from '../../media/images/bookIcon.jpg'
import Search from '../Search/Search';

const Header = ({stateChange, load, setLoad, setSearch}) => {
    return (
        <div className={style.header}>
            <h1>
                <div className={style.header__search}>
                    <Search stateChange={stateChange} load={load} setLoad={setLoad} setSearch={setSearch}/>
                </div>
                <div className={style.header__title}>
                    <span>TIM</span><span>BOOK</span><span>TWO</span>
                </div>
            </h1> 
        </div>
    );
};

export default Header;