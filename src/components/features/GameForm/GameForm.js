import { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './GameForm.module.scss';
import { addGame } from '../../../redux/GamesReducer';
import { useDispatch } from 'react-redux';

const GameForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGame({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      TItle:{' '}
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author:{' '}
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button>Add Game</Button>
      {title}
    </form>
  );
};

export default GameForm;
