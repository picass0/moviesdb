import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Pagination from 'material-ui-flat-pagination';

const useStyles = makeStyles((theme) => ({
  resultList: {
    listStyle: 'none',
    margin: theme.spacing(0, 0, 6),
    padding: 0,
    width: '100%',
  },
}));

function ResultList({
  // eslint-disable-next-line react/prop-types
  children, limit, offset, total, paginationClickHandler,
}) {
  const classes = useStyles();
  return (
    <>
      <table className={classes.resultList}>
        <tbody>
          {children}
        </tbody>
      </table>
      <Pagination
        limit={limit}
        offset={offset}
        total={total}
        onClick={(e, newOffset) => { paginationClickHandler(newOffset); }}
      />
    </>
  );
}

ResultList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResultList;
