import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchPhotoName, setSearchPhotoName] = useState('');

  const changeInputValueHandler = e => {
    const { value } = e.target;

    setSearchPhotoName(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchPhotoName.trim() === '') {
      alert('Input field can not be empty');
      return;
    }

    onSubmit(searchPhotoName);
    setSearchPhotoName('');
  };

  return (
    <>
      <header className={s.Searchbar} onSubmit={handleSubmit}>
        <form className={s.SearchForm}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            value={searchPhotoName}
            onChange={changeInputValueHandler}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
