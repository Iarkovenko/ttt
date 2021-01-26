import ImagesListItem from './ListItem';
import s from './GalleryList.module.css';

const ImageGallery = ({ images, onOpen }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ webformatURL, largeImageURL, id }) => (
        <ImagesListItem
          key={id}
          webformatURL={webformatURL}
          imageUrl={largeImageURL}
          onOpen={onOpen}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
