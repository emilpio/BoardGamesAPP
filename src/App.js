import { useState } from 'react';
import GameForm from './components/features/GameForm/GameForm';
import GamesList from './components/features/GamesList/GamesList';
import shortid from 'shortid';
import Hero from './components/pages/Hero/Hero';
import styles from './components/views/Container/Container.module.scss';
import Container from './components/views/Container/Container';
import Game from './components/pages/Game/Game';
import Footer from './components/views/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header/Header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGames } from './redux/GamesReducer';
import Favorite from './components/pages/Favorite/Favorite';
import SearchForm from './components/features/SearchForm/SearchForm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => fetchGames(dispatch), [dispatch]);

  return (
    <Container className={styles.Container}>
      <Header />
      <Hero />
      <SearchForm />
      <Routes>
        <Route path='/' element={<GamesList />} />
        <Route path='/game' element={<Game />} />
        <Route path='/game/:id' element={<Game />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
