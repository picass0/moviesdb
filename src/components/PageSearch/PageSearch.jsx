import React from 'react';

import SearchBar from '../UI/SearchBar/SearchBar';
import MainHeader from '../UI/MainHeader/MainHeader';
import ResultList from '../UI/ResultList/ResultList';
import ResultItem from '../UI/ResultList/ResultItem/ResultItem';
import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';

function PageSearch() {
  return (
    <>
      <SearchBar />
      <Container>
        <MainHeader>
          Результаты поиска
        </MainHeader>
        <ResultList
          limit={10}
          offset={0}
          total={500}
          paginationClickHandler={(offset) => { console.log(offset); }}
        >
          <ResultItem
            item={{ year: '2019', name: 'тест тест тест т тест тест т', link: '/film/id' }}
            buttons={(
              <>
                <Button>
                  Добавить в просмотренное
                </Button>
                <Button variant="text">
                  Добавить в Избранное
                </Button>
              </>
            )}
          />
          <ResultItem item={{ year: '2019', name: 'тест тест тест т', link: '/film/id' }} />
          <ResultItem item={{ year: '2019', name: 'тест', link: '/film/id' }} />
        </ResultList>
      </Container>
    </>
  );
}

export default PageSearch;
