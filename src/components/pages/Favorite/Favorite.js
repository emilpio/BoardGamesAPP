import styles from './Favorite.module.scss';
import { getFavoriteGame } from '../../../redux/GamesReducer';
import { useSelector } from 'react-redux';
import PageTitle from '../../views/PageTitle/PageTitle';
import Game from '../Game/Game';

const Favorite = () => {
  const games = useSelector(getFavoriteGame);
  if (!games.length)
    return (
      <div className={styles.no_favorite_cards}>
        You don't have favorite games
      </div>
    );
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {games.map((game) => (
          <Game key={game.id} {...game} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
