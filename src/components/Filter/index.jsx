import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import Dropdown from '../Dropdown';
import s from './index.scss';
import { FILTER_OPTIONS } from '../../consts/filterOptions';
import { CONTENT } from '../../consts/content';

const FilterComponent = () => {

  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const handleChange = (newValue) => setFilter(newValue);

  useEffect(() => {
    function updateFilter() {
      dispatch({ type: 'FILTER_BY', payload: filter });
    } 
    updateFilter();
  }, [dispatch, filter]);

  return (
    <div className={s.root}>
      <label htmlFor="filterDropdown">{CONTENT.filter.title}</label>
      <Dropdown id="filterDropdown" value={filter} onChange={handleChange} options={FILTER_OPTIONS} />
    </div>
  );
};

export default FilterComponent;
