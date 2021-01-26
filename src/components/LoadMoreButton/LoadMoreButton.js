import s from './Button.module.css';

function LoadMoreButton({ onClick }) {
  return (
    <button onClick={onClick} type="submit" className={s.Button}>
      <span className={s.Label}>Load More</span>
    </button>
  );
}
export default LoadMoreButton;
