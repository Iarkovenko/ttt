import s from './ListItem.module.css';

const ImagesListItem = ({ webformatURL, imageUrl, id, onOpen }) => {
  return (
    <li key={id} className={s.Item}>
      <img
        src={webformatURL}
        data-url={imageUrl}
        alt=""
        className={s.Image}
        onClick={() => onOpen(imageUrl)}
      />
    </li>
  );
};

export default ImagesListItem;
