import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Container from '../UI/Container/Container';
import Button from '../UI/Button/Button';
import img from '../../assets/static/images/u14.png';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
    '@media(min-width: 40rem)': {
      display: 'flex',
    },
  },
  imgWrapper: {
    '@media(min-width: 40rem)': {
      minWidth: '20rem',
      width: '33%',
    },
    '& img': {
      maxHeight: '25rem',
      '@media(min-width: 40rem)': {
        maxHeight: 'none',
        width: '100%',
      },
      maxWidth: '100%',
    },
  },
  description: {
    textAlign: 'left',
    '@media(min-width: 40rem)': {
      paddingLeft: theme.spacing(8),
    },
  },
  summaryTable: {
    marginTop: theme.spacing(4),
    fontSize: '1.1rem',
    '& td': {
      paddingTop: theme.spacing(2),
    },

    '& td:first-child': {
      color: '#999CB5',
      paddingRight: theme.spacing(4),
    },
  },
  summaryText: {
    lineHeight: 2,
  },
}));

function PageFilm() {
  const classes = useStyles();
  return (
    <Container>
      <Button to="/"> &#x2190; Вернуться назад</Button>
      <div className={classes.container}>
        <div className={classes.imgWrapper}>
          <img src={img} alt="Страница" />
        </div>
        <div className={classes.description}>
          <Typography variant="h3">
            2001: Космическая Одиссея
          </Typography>
          <table className={classes.summaryTable}>
            <tbody>
              <tr>
                <td>Год</td>
                <td>1968</td>
              </tr>
              <tr>
                <td>Страна</td>
                <td>Великобритания</td>
              </tr>
              <tr>
                <td>Режиссер</td>
                <td>Стенли Кубрик</td>
              </tr>
              <tr>
                <td>Жанр</td>
                <td>Фантастика</td>
              </tr>
            </tbody>
          </table>
          <p className={classes.summaryText}>
            Кто мы? Какое место мы занимаем во Вселенной? Эти вопросы стоят перед героями фильма. Экипаж космического корабля С. С. Дискавери — капитаны Дэйв Боумэн, Фрэнк Пул и их бортовой компьютер ХЭЛ-9000 — должны исследовать район галактики и понять, почему инопланетяне следят за Землей. На этом пути их ждет множество неожиданных открытий…
          </p>
        </div>
      </div>
    </Container>
  );
}

export default PageFilm;
