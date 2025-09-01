import clsx from "clsx";

import styles from "./Button.module.scss";
import Button from "../../components/Button";
function ButtonPage() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.box)}>
        <Button>Click me</Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button primary>Primary Button</Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button href="https://google.com" target="_blank">
          Go to Google
        </Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button bordered>Bordered</Button>
        <Button rounded>Rounded</Button>
        <Button primary rounded>
          Primary Rounded
        </Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button onClick={() => alert("Clicked!")}>Click Alert</Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button disabled onClick={() => alert("Should not show")}>
          Disabled Button
        </Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button loading onClick={() => console.log("Should not log")}>
          Loading Button
        </Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button className={clsx(styles["my-custom-class"])} primary>
          Custom Styled
        </Button>
      </div>
      <div className={clsx(styles.box)}>
        <Button primary>
          <span>📧</span> Send Email
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
