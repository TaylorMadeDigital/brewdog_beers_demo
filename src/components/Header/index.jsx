import React from 'react';
import {
    Link
  } from "react-router-dom";
import logo from '../../assets/images/brewdog_logo.png';
import Heading from '../../components/Heading';
import { CONTENT } from '../../consts/content';

import s from './index.scss';

const Header = () => {
  return (
    <Link to="/">
        <header className={s.root}>
            <img src={logo} alt={CONTENT.global.logo} role="presentation" />
            <Heading headingLevel="h1">{CONTENT.global.title}</Heading>
        </header>
    </Link>
  );
}

export default Header;
