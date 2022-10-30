import style from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
import { books } from '../../service/book';
import { topFunction } from '../../service/book';


const Search = ({stateChange, load, setLoad, setSearch}) => {
    const navigate = useNavigate();

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
            setLoad(true);
            topFunction;
          let value = await books(e.target.value, setSearch);
          await stateChange(value);
          navigate('/books');
          setLoad(false)
        }
      };
    return (
      <>
       <div className={style.container}>
            {!load && <input type="search" placeholder="search for books" onKeyDown={handleKeyDown}/>}
        </div>
        
      </>
    );
};

export default Search;