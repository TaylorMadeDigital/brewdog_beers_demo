import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useParams } from "react-router-dom";

import s from './index.scss';
import Heading from '../../components/Heading/';
import Header from '../../components/Header';
import { CONTENT } from '../../consts/content';

const apiUrl = 'https://api.punkapi.com/v2/';

function DetailContainer() {
  const params = useParams();
  const beers = useSelector(state => {
    return state.beers.all
  });
  const current = useSelector(state => {
    return state.beers.current
  });
  const dispatch = useDispatch();
  
  const getList = (items) => {
    return items.map((item, i) => (
      <li key={i}>{item.name}</li>
    ));
  }
  
  useEffect(() => {
    async function fetchBeer() {
      const hasBeer = (beers.find(beer => {
        return beer.id === parseInt(params.id, 10);
      }));
      if(hasBeer) return await dispatch({ type: 'GET_ONE', payload: hasBeer });
      const response = await axios.get(`${apiUrl}beers/${params.id}`);
      await dispatch({ type: 'GET_ONE', payload: response.data[0] });
      return await response.data[0];
    } 
    fetchBeer();
  }, [params.id, beers, dispatch]);

  return (
    <Fragment>
      <Header />
      <article className={s.root}>
        <header className={s.header}>
          <Heading headingLevel="h2">{current.name}</Heading>
          <Heading headingLevel="h3">{current.tagline}</Heading>
          <p>{current.first_brewed}</p>
        </header>
        <div className={s.leftCol}>
          <img src={current.image_url} alt={`${current.name}`} />
        </div>
        <div className={s.rightCol}>
          <p>{current.description}</p>
          <Heading headingLevel="h4" alignment="left">{CONTENT.detail.brewersTips}</Heading>
          <p>{current.brewers_tips}</p>
          <Heading headingLevel="h4" alignment="left">{CONTENT.detail.foodPairing}</Heading>
          <ul>{current.food_pairing && current.food_pairing.map((item, i) => <li key={i}>{item}</li>)}</ul>
          <Heading headingLevel="h4" alignment="left">{CONTENT.detail.ingredients}</Heading>
          <ul>{current.ingredients && getList(current.ingredients.malt)}</ul>
          <ul>{current.ingredients && getList(current.ingredients.hops)}</ul>
        </div>
        <footer>
          {CONTENT.detail.footer} {current.contributed_by}
        </footer>
      </article>
    </Fragment>
  );
}

export default DetailContainer;
