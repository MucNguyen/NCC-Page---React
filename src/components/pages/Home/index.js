import styles from "./Home.module.scss";
import DetailItem from "./DetailItem";
import cssLogo from "../../../assets/images/css-logo.png";
import dwLogo from "../../../assets/images/dw-log.jpg";
import urlLogo from "../../../assets/images/url-log.png";

const cx = require("classnames/bind").bind(styles);
function Home() {
  return (
    <div className={styles["page-body-content"]}>
      <img
        src="https://static.ybox.vn/2019/8/2/1566878761414-imgpsh_fullsize_anim.png"
        alt="Image"
      />
      <div className={cx("page-body-detail")}>
        <h1>Lorem ipsum dolor sit amet?</h1>
        <p className="col-xxl-8 col-lg-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
      <div className={styles["page-body-files"]}>
        <DetailItem
          title={"Lorem ipsum dolor sit amet?"}
          image={cssLogo}
          imageAlt={"CSS Logo"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
          }
        />
        <DetailItem
          title={"Lorem ipsum dolor sit amet?"}
          image={dwLogo}
          imageAlt={"DW Logo"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
          }
        />
        <DetailItem
          title={"Lorem ipsum dolor sit amet?"}
          image={urlLogo}
          imageAlt={"URL Logo"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
          }
        />
      </div>
    </div>
  );
}

export default Home;
