import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>My boardgames list</h1>
      <p className={styles.subtitle}>New games soon...</p>
    </div>
  );
};

export default Hero;
