import { useState } from 'react';
import styles from './SearchBar.module.css';
import arrowIcon from '../images/icon-arrow.svg';

const SearchBar = (props) => {
  const [enteredIp, setEnteredIp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setEnteredIp(enteredIp);
    props.handleIp(enteredIp)
    setEnteredIp('')
  };

  return (
    <div className={styles.entire} >
      <h3 className='text-white text-3xl mb-8 '>IP Address Tracker</h3>

      <form className='flex w-96' onSubmit={handleSubmit}>
        <input
          className='w-96 py-3 rounded-l-lg rounded-r-none rounded-tr-none rounded-br-none border-none outline-none pl-2'
          type='text'
          value={enteredIp}
          onChange={(event) =>
            setEnteredIp(event.target.value)}
        ></input>
        <button type='submit' className='bg-black py-25 w-12 rounded-r-lg'>
          <img className='m-auto' src={arrowIcon} alt='icon'></img>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
