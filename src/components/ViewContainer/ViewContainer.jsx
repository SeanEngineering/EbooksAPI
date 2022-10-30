import React from 'react';
import style from './ViewContainer.module.scss';

const ViewContainer = ({children,setView}) => {
    return (
        <div className={style.container} onClick={()=>setView(false)}>
            {children}
        </div>
    );
};

export default ViewContainer;