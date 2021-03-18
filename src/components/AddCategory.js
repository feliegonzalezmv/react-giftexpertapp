import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    if (inputValue && inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };
  return (
    <form onSubmit={hanldeSubmit}>
      <input type={'text'} value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};