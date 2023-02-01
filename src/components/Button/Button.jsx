import css from '../../styles.css';

export const Button = ({onClick}) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};






