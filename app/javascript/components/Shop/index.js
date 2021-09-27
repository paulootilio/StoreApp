import React, { useState, Table } from "react";
import { Query } from "react-apollo";
import { ShopQuery, StoreQuery } from "./operations.graphql";
import UpdateProductForm from "../UpdateProductForm";
import DeleteProductForm from "../DeleteProductForm";
import DeleteStoreForm from "../DeleteStoreForm";
import AddProductStoreForm from "../AddProductStoreForm";
import UpdateStoreForm from "../UpdateStoreForm";
import AddProductForm from "../AddProductForm";
import AddStoreForm from "../AddStoreForm";
import cs from "./styles";

const Shop = () => {
  const [product, setProduct] = useState(null);
  const [productDelete, setProductDelete] = useState(null);
  const [productStock, setProductStock] = useState(null);
  const [storeDelete, setStoreDelete] = useState(null);
  const [store, setStore] = useState(null);
  const [modalAddProduct, setModalAddProduct] = useState(false);
  const [modalAddLoja, setModalAddLoja] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>Produtos</h1>
      <button className={cs.btn} onClick={() => setModalAddProduct(true)}>
        Cadastrar Produto
      </button>
      <hr />
      <Query query={ShopQuery}>
        {({ data, loading }) => (
          <div className={cs.shop}>
            {loading || !data.products
              ? "loading..."
              : data.products.map(({ id, name, description, price }) => (
                  <div className={cs.plate}>
                    <div className={cs.name}>{name}</div>
                    <div>{description}</div>
                    <div>{price}</div>

                    <button
                      key={id}
                      className={cs.edit}
                      onClick={() =>
                        setProduct({ id, name, description, price })
                      }
                    >
                      Editar
                    </button>
                    <button
                      key={id * 2}
                      className={cs.delete}
                      onClick={() =>
                        setProductDelete({ id, name, description, price })
                      }
                    >
                      Excluir
                    </button>
                  </div>
                ))}
            {product !== null && (
              <UpdateProductForm
                id={product.id}
                initialName={product.name}
                initialDescription={product.description}
                initialPrice={product.price}
                onClose={() => setProduct(null)}
              />
            )}
            {productDelete !== null && (
              <DeleteProductForm
                id={productDelete.id}
                initialName={productDelete.name}
                initialDescription={productDelete.description}
                initialPrice={productDelete.price}
                onClose={(() => setProductDelete(null), refreshPage)}
              />
            )}
          </div>
        )}
      </Query>
      {modalAddProduct && (
        <AddProductForm onClose={() => setModalAddProduct(false)} />
      )}

      <h1>Lojas</h1>
      <button className={cs.btn} onClick={() => setModalAddLoja(true)}>
        Cadastrar Loja
      </button>
      <hr />
      <Query query={StoreQuery}>
        {({ data, loading }) => (
          <div className={cs.shop}>
            {loading || !data.stores
              ? "loading..."
              : data.stores.map(({ id, name, address }) => (
                  <div className={cs.plate}>
                    <div className={cs.name}>{name}</div>
                    <div>{address}</div>

                    <button
                      key={id * 3}
                      className={cs.addProduct}
                      onClick={() => setProductStock({ id, name })}
                    >
                      Adicionar Produto
                    </button>
                    <button
                      key={id}
                      className={cs.edit}
                      onClick={() => setStore({ id, name })}
                    >
                      Editar
                    </button>
                    <button
                      key={id * 2}
                      className={cs.delete}
                      onClick={() => setStoreDelete({ id, name, address })}
                    >
                      Excluir
                    </button>
                  </div>
                ))}
            {store !== null && (
              <UpdateStoreForm
                id={store.id}
                initialName={store.name}
                initialAddress={store.address}
                onClose={() => setStore(null)}
              />
            )}
            {storeDelete !== null && (
              <DeleteStoreForm
                id={storeDelete.id}
                initialName={storeDelete.name}
                initialAddress={storeDelete.address}
                onClose={(() => setStoreDelete(null), refreshPage)}
              />
            )}
            {productStock !== null && (
              <AddProductStoreForm
                id={productStock.id}
                initialStoreId={productStock.id}
                initialStoreName={productStock.name}
                onClose={(() => setProductStock(null), refreshPage)}
              />
            )}
          </div>
        )}
      </Query>
      {modalAddLoja && <AddStoreForm onClose={() => setModalAddLoja(false)} />}
    </div>
  );
};

export default Shop;
