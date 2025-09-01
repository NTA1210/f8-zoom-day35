import React, { useState, useEffect } from "react";
import styles from "./Profile.module.scss";
import clsx from "clsx";

function ProfileCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className={clsx(styles.profile)}>
      {user !== null ? (
        <div className={clsx(styles.card)}>
          <img
            className={clsx(styles.avatar)}
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt={user.name}
          />

          <div className={clsx(styles.info)}>
            <div className={clsx("row")}>
              <div className={clsx("label")}>Name:</div>
              <div className={clsx("value")}>{user.name}</div>
            </div>
            <div className={clsx("row")}>
              <div className={clsx("label")}>Username:</div>
              <div className={clsx("value")}>{user.username}</div>
            </div>
            <div className={clsx("row")}>
              <div className={clsx("label")}>Email:</div>
              <div className={clsx("value")}>{user.email}</div>
            </div>
            <div className={clsx("row")}>
              <div className={clsx("label")}>Phone:</div>
              <div className={clsx("value")}>{user.phone}</div>
            </div>
            <div className={clsx("row")}>
              <div className={clsx("label")}>Website:</div>
              <div className={clsx("value")}>{user.website}</div>
            </div>
            <div className={clsx("row")}>
              <div className={clsx("label")}>Address:</div>
              <div className={clsx("value")}>
                {user.address.street}, {user.address.city}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={clsx("loading")}>
          <div className={clsx("loader")}></div>
          <p className={clsx("loading-text")}>loading....</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
