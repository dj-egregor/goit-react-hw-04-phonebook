import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = props => {
  const updateFilter = event => {
    props.onFilter(event.target.value);
  };

  return (
    <div className={css.searchWrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={updateFilter}
        value={props.filter}
      />
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default Filter;
