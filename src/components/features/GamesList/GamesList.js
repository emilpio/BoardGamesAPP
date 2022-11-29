import styles from './GamesList.module.scss';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { addGame, getGamesById } from '../../../redux/GamesReducer';
import { removeGame } from '../../../redux/GamesReducer';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import GameForm from '../GameForm/GameForm';
import Game from '../../pages/Game/Game';
import { NavLink, useParams } from 'react-router-dom';
import { getAllGames } from '../../../redux/GamesReducer';

const GamesList = () => {
  const games = useSelector(getAllGames);
  // const { id } = useParams();

  const dispatch = useDispatch();

  const remove = (gameId) => {
    dispatch(removeGame(gameId));
  };

  // const gameData = useSelector((state) => getGamesById(state, id));

  return (
    <article className={styles.column}>
      <ul className={styles.cards}>
        {games.map((game) => (
          <NavLink key={game.id} to={'game/' + game.id}>
            <li className={styles.card} key={game.id}>
              {game.title} by {game.author}
              <button onClick={remove}>remove</button>
              {game.author}
            </li>
          </NavLink>
        ))}
      </ul>{' '}
      <ul className={styles.cards}>
        {games.map((game) => (
          <Game key={game.id} title={game.title} />
        ))}
      </ul>
      <GameForm />
    </article>
  );
};

export default GamesList;
