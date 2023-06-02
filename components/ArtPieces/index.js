import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/index";
import styles from './ArtPieces.module.css'

export default function ArtPieces({ pieces, handleFavorite, artPiecesInfo }) {
  console.log(artPiecesInfo);

  return (
    <div className={styles.galleryContainer}>
      <h1 className={styles.galleryHeader}>Art Gallery</h1>
      <ul className={styles.galleryList}>
        {pieces.map((element) => (
          <li key={element.slug} role="list" className={styles.galleryListItem}>
            <h3 role="heading" className={styles.pieceHeader}>{element.artist}</h3>
            <Link href={`/pieces/${element.slug}`}>
              <div className={styles.imageContainer}v>
              <Image
                src={element.imageSource}
                alt={element.name}
                width={250}
                height={200}
                role="image"
              />
              </div>
            </Link>
            <FavoriteButton
              handleFavorite={handleFavorite}
              artPiecesInfo={artPiecesInfo}
              id={element.slug}
            />
            <small role="small" className={styles.caption}>{element.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
