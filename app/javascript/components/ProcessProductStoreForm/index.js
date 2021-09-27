import React, { useState } from "react";
import cs from "./styles";
import { Query } from "react-apollo";
import { ProductsQuery } from "./operations.graphql";

const ProcessProductStoreForm = ({
  initialProduct = 0,
  initialStoreId = 0,
  initialStoreName = 0,
  disabled = false,
  onProcessProductStore,
  buttonText,
  loading,
}) => {
  const [stock, setStock] = useState(0);
  const [product_id, setProduct] = useState(initialProduct);
  const [store_id, setStore] = useState(initialStoreId);
  const [store_name, setStoreName] = useState(initialStoreName);
  return (
    <div className={cs.form}>
      <label className={cs.label}>Loja</label>
      <input
        type="text"
        placeholder="Loja"
        disabled={true}
        value={store_name}
        className={cs.input}
        onChange={(e) => setStore(e.currentTarget.value)}
      />

      <label className={cs.label}>Produto</label>
      <Query query={ProductsQuery}>
        {({ data, loading }) => (
          <select
            value={product_id}
            onChange={(e) => setProduct(e.currentTarget.value)}
          >
            {loading || !data.products
              ? "loading..."
              : data.products.map(({ id, name }) => (
                  <option value={id}>{name}</option>
                ))}
          </select>
        )}
      </Query>
      <label className={cs.label}>Quantidade</label>
      <input
        type="number"
        placeholder="Quantidade"
        value={stock}
        className={cs.input}
        onChange={(e) => setStock(e.currentTarget.value)}
      />

      {loading ? (
        "...Loading"
      ) : (
        <button
          onClick={() => {
            onProcessProductStore({ store_id, product_id, stock }),
              setStore(0),
              setProduct(0);
              setStock(0);
          }}
          className={cs.registration}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProcessProductStoreForm;
