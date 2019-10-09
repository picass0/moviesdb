import React from 'react';

import { SEARCH_PAGE_ROUTE } from '../../constants/routes';
import Container from '../UI/Container/Container';
import MainHeader from '../UI/MainHeader/MainHeader';
import SimpleLink from '../UI/SimpleLink/SimpleLink';

function PageError() {
  return (
    <Container>
      <MainHeader>
        Page Not Found. <SimpleLink to={SEARCH_PAGE_ROUTE}>To the Main Page</SimpleLink>
      </MainHeader>
    </Container>
  );
}

export default PageError;
