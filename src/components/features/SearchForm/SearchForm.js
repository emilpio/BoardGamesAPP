import styles from './SearchForm.module.scss';
import TextInput from '../../common/TextInput/TextInput';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateSearchString(searchString));
  // }, [dispatch, searchString]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateSearchString(searchString));
  //   setSearchString('');
  // };

  return (
    <form className={styles.searchForm}>
      <TextInput
        placeholder='Search...'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
