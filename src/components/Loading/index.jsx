import clsx from "clsx";
import PropTypes from "prop-types";

import styles from "./Loading.module.scss";

function Loading({ text }) {
  return (
    <div className={clsx(styles.loading)}>
      <div className={clsx(styles.loader)}></div>
      <p className={clsx(styles.loadingText)}>{text}</p>
    </div>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
