import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/index";
import styles from './ArtPieces.module.css'

export default function ArtPieces({ pieces, handleFavorite, isFavorite }) {
  return (
    <div className={styles.galleryContainer}>
      <ul className={styles.galleryList}>
        {pieces.map((element) => (
          <li key={element.slug} role="list" className={styles.galleryListItem}>
            <h3 role="heading">{element.artist}</h3>
            <Link href={`/pieces/${element.slug}`}>
              <Image
                src={element.imageSource}
                alt={element.name}
                width={300}
                height={150}
                role="image"
              />
            </Link>
            <FavoriteButton
              handleFavorite={handleFavorite}
              isFavorite={isFavorite}
              id={element.slug}
            />
            <small role="small">{element.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
