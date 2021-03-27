import React, { useEffect, useState } from 'react';
import { News } from '../news/News';

import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(async () => {
    setLoading(true);
    setError(null);
    let json;
    try {
      const result = await fetch(apiUrl);
      if(!result.ok) throw new Error ('result not ok');
      json = await result.json();
    } catch (e) {
      setError('Gat ekki sótt gögn.');
      return;
    } finally {
      setLoading(false);
    }
    setData(json);
  }, []);

  if (error) return <p>Villa kom upp: {error}</p>;

  if (loading) return <p>Sæki gögn...</p>

  return (
    <div className={s.newslist}>
      {data &&
        data.map((category) => (
          <div className={s.newslist__cards}>
            <News key={category.id} id={category.id} title={category.title} />
          </div>
        ))}
    </div>
  );
}