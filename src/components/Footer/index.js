import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles["page-footer"]}>
      <hr />
      <p className="container">Copyright © 2021</p>
    </div>
  );
}

export default Footer;
