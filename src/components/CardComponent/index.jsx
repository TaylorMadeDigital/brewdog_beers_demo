import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
  } from "react-router-dom";

import Heading from '../Heading/'; 
import s from './index.scss';

export const CardComponent = props => {
  const { 
    item,
    children
  } = props;

  const WithLink = ({children}) => (item.link ? 
    <Link to={item.link}>{children}</Link>
    : children);

    WithLink.propTypes = {
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]), 
    };

  const cardComponent  = (
    <article data-testid="card"  className={s.card}>   
      <WithLink>
        <header data-testid="cardHeading">
          <Heading>{item.title}</Heading>
          <Heading headingLevel="h3" >{item.subtitle}</Heading>
          {item.image && <img src={item.image} alt={item.title} />}
        </header>
        {children}
      </WithLink>
    </article>
  );

  return cardComponent;
};

export const cardComponentPropTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    subtitle: PropTypes.string,
    link: PropTypes.string,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]),
};

CardComponent.propTypes = cardComponentPropTypes;

CardComponent.defaultProps = {
  item: {
    title: '',
    subtitle: '',
    image: '',
    link: '',
  },
};

export default (CardComponent);
