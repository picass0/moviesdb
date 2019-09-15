import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN_PAGE_ROUTE } from '../../constants/routes';

function PageError() {
  return (
    <div>
      <h1>
        Такой страницы не существует :(
      </h1>
      <Link to={MAIN_PAGE_ROUTE}>На главную страницу</Link>
    </div>
  );
}

export default PageError;
