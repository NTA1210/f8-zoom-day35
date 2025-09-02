import React, { useState, useEffect } from "react";
import clsx from "clsx";

import styles from "./Products.module.scss";
import Loading from "../../components/Loading";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-list">
      <h1 className="title">Products List</h1>

      {loading ? <Loading text="Loading..." /> : null}
      {products.length > 0 ? (
        <div className={clsx(styles.products)}>
          {products.map((product) => (
            <div className={clsx(styles.product)} key={product.id}>
              <div className="row">
                <div className="label">ID:</div>
                <div className="value">{product.id}</div>
              </div>
              <div className="row">
                <div className="label">Title:</div>
                <div className={clsx("value", styles["product-title"])}>
                  {product.title}
                </div>
              </div>
              <div className="row">
                <div className="label">Body:</div>
                <div className={clsx("value", styles["product-body"])}>
                  {product.body}
                </div>
              </div>
              <button
                className={clsx("btn", styles["view"])}
                onClick={() => setModal(product)}
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>No products</p>
      )}

      <div className={`modal ${modal ? "show" : ""}`}>
        <div className="modal-header">
          <h2 className="modal-title">Chi tiết sản phẩm</h2>
          <button className="btn close" onClick={() => setModal(null)}>
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="row">
            <div className="label">ID:</div>
            <div className="value">{modal?.id}</div>
          </div>
          <div className="row">
            <div className="label">Title:</div>
            <div className="value">{modal?.title}</div>
          </div>
          <div className="row">
            <div className="label">Body:</div>
            <div className="value">{modal?.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
