import styles from './Game.module.scss';
import GameForm from '../../features/GameForm/GameForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getGamesById } from '../../../redux/GamesReducer';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleGameFavorite, removeGame } from '../../../redux/GamesReducer';
import Button from '../../common/Button/Button';
import { NavLink } from 'react-bootstrap';

const Game = ({ id, isFavorite, title, author }) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleGameFavorite(id, isFavorite));
  };
  const remove = () => {
    dispatch(removeGame(id));
  };

  return (
    <li className={styles.card}>
      {title} by {author}
      {/* <NavLink to={'/game/' + id}>
        <Button>Show more</Button>
      </NavLink> */}
      <div>
        <button
          onClick={toggle}
          className={clsx(styles.star_button, isFavorite && styles.active)}>
          <span className='fa fa-star-o' />
        </button>
        <button onClick={remove} className={clsx(styles.remove_button)}>
          <span className='fa fa-trash' />
        </button>
      </div>
    </li>
  );
};
export default Game;
