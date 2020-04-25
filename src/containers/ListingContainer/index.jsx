import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import s from './index.scss';
import { CardComponent } from '../../components/CardComponent';
import FilterComponent from '../../components/Filter';
import { sortArray, sortArrayByDate, sortArrayByNumber } from '../../utils/array';
import Header from '../../components/Header';
import { CONTENT } from '../../consts/content';

const apiUrl = 'https://api.punkapi.com/v2/';

function ListingContainer() {

  const beers = useSelector(state => state.beers.all);
  const filter = useSelector(state => state.beers.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(`${apiUrl}beers`);
      await dispatch({ type: 'GET_ALL', payload: response.data });
    } 
      fetchBeers();
  }, [dispatch]);

  const getBeerList = () => {
    if (filter) {
      if (filter === 'name') return sortArray(beers, filter);
      if (filter === 'first_brewed') return sortArrayByDate(beers, filter, 'MM/YYYY');
      return sortArrayByNumber(beers, filter);
    }
    return beers;
  }
  const BeerList = () => {
    return getBeerList().map(beer => {
      const item = {
        id: beer.id,
        title: beer.name,
        subtitle: beer.tagline,
        link: `detail/${beer.id}`,
      };
      return (<CardComponent className="cardItem" key={item.id} item={item}>
        <p>{CONTENT.listing.brewed} {beer.first_brewed}</p>
        <span>{CONTENT.listing.abv} {beer.abv || CONTENT.listing.notAvailable}</span>
        <span>{CONTENT.listing.ibu} {beer.ibu || CONTENT.listing.notAvailable}</span>
      </CardComponent>);
    });
  }
  return (
    <div className={s.root}>
        <Header />
        <FilterComponent />
        <div className={s.cardList}>
          <BeerList />
        </div>
    </div>
  );
}

export default ListingContainer;
