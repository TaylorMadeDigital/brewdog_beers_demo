import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import s from './index.scss';

const Heading = ({ children, headingLevel, alignment, addTopPadding }) => {
  const Tag = headingLevel;
  const textAlign = alignment;
  const headingClasses = classNames(s.heading, {
    [s['heading--padding']]: addTopPadding,
  }, s[`heading--${textAlign}`]);
  return (
    <Fragment>
      <Tag data-testid="heading"  className={headingClasses}>
        {children}
      </Tag>
    </Fragment>
  );
}

export const headingPropTypes = {
  headingLevel: PropTypes.string,
  alignment: PropTypes.string,
  addTopPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

Heading.propTypes = headingPropTypes;

Heading.defaultProps = {
  headingLevel: 'h2',
  alignment: 'center',
  addTopPadding: false,
};

export default Heading;
