import React from 'react';
import PropTypes from 'prop-types';
import { CONTENT } from '../../consts/content';

const Dropdown = ({
  id,
  value,
  onChange,
  placeholder,
  options
}) => {
  return (
      <select
        id={id}
        data-testid="dropdown"
        value={value}
        onChange={e => onChange(e.target.value)}>
          <option>{placeholder}</option>
        {options.map((o, i) => (
          <option key={i} value={o.value}>{o.label}</option>
        ))}
      </select>
  );
};

export const dropdownPropTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Dropdown.propTypes = dropdownPropTypes;

Dropdown.defaultProps = {
  placeholder: CONTENT.global.placeholder,
};

export default Dropdown;
