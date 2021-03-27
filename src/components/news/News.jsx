import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './News.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ id, showAll = false }) {
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(async () => {
    setLoading(true);
    setError(null);
    let items;
    try {
      const result = await fetch(`${apiUrl}${id}`);
      if(!result.ok) throw new Error ('result not ok');
      items = await result.json();
    } catch (e) {
      setError('Gat ekki sótt gögn');
    } finally {
      setLoading(false);
    }
    setData(items);
  }, []);

  if (error) return <p className={s.news__error}>Villa kom upp: {error}</p>;
  if (loading || !data) return <p className={s.news__loading}>Sæki gögn...</p>;

  const news = showAll ? data.items : data.items.slice(0, 5);

  return (
    <div className={s.news}>
      <div className={s.news__card}>
        <h2>{data && data.title}</h2>
        {news.map((item) => (
          <div key={item.link}>
            <a href={item.link} className={s.news__nlink}>{item.title}</a>
          </div>
        ))}
        <div className={s.news__links}>
          {!showAll && <Link to={`/${id}`} className={s.news__link}>Allar fréttir</Link>}
          {showAll && <Link to={'./'} className={s.news__link}>Til baka</Link>}
        </div>
      </div>
    </div>
  );
}