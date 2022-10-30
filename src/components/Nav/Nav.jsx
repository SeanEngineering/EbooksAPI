
import React from 'react';
import style from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { topFunction } from '../../service/book';

const Nav = () => {
    

    return (
        <nav className={style.nav}>
            <div className={style.nav__link} onClick={topFunction}>TBT</div>
            <NavLink className={style.nav__link} to='/books'>books</NavLink>
            <NavLink className={style.nav__link} to='/collection'>collection</NavLink>
            <a className={style.nav__link} href="https://seanengineering.github.io/portfolio_showcase/index.html" target={'_blank'}>portfolio</a>
        </nav>
    );
};

export default Nav;