import { Link } from "react-router";
import clsx from "clsx";
import PropsType from "prop-types";

import styles from "./Button.module.scss";
import PropTypes from "prop-types";
function Button({
  children,
  href,
  primary,
  bordered,
  rounded,

  size,
  className,

  loading,
  disabled,

  onClick,

  ...passProps
}) {
  const Component = href ? "a" : "button";
  const classes = clsx(
    styles.btn,
    {
      [styles.primary]: primary,
      [styles.bordered]: bordered,
      [styles.rounded]: rounded,

      [styles[size]]: size,

      [styles.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      {...passProps}
      className={clsx(styles.btn, classes)}
      disabled={disabled}
      href={href}
      onClick={!loading && !disabled && onClick}
    >
      {loading && (
        <div className={clsx(styles.loading)}>
          <div className={clsx(styles.loader)}></div>
        </div>
      )}
      <span className={clsx(loading && styles.hidden)}>{children}</span>
    </Component>
  );
}

Button.propsType = {
  children: PropsType.node.isRequired,
  to: PropsType.string,
  href: PropsType.string,
  primary: PropsType.bool,
  bordered: PropsType.bool,
  rounded: PropsType.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropsType.string,
};

export default Button;
