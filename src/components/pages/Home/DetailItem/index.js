import styles from "../Home.module.scss";

function DetailItem({ title, image, imageAlt, description }) {
  return (
    <div className={styles["page-body-file-item"]}>
      <h1>{title}</h1>
      <div>
        <img src={image} alt={imageAlt} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DetailItem;
