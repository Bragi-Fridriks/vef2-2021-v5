import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>404 fannst ekki</h1>
      <Link to={'./'}>Til baka</Link>
    </div>
  );
}
