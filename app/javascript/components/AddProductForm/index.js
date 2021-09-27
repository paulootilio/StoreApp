import React from "react";
import { Mutation } from "react-apollo";
import { AddProductMutation } from "./operations.graphql";
import ProcessProductForm from "../ProcessProductForm";
import { ShopQuery } from "../Shop/operations.graphql";
import cs from "./styles";

const AddProductForm = ({ onClose }) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Adicionar Produto</h2>
      <Mutation mutation={AddProductMutation}>
        {(addProduct, { loading }) => (
          <ProcessProductForm
            buttonText="Adicionar Produto"
            loading={loading}
            onProcessProduct={({ name, description, price }) => {
              addProduct({
                variables: {
                  name,
                  description,
                  price: parseFloat(price),
                },
                update: (cache, { data: { addProduct } }) => {
                  {
                    const product = addProduct.product;
                    if (product) {
                      const currentProducts = cache.readQuery({
                        query: ShopQuery,
                      });
                      cache.writeQuery({
                        query: ShopQuery,
                        data: {
                          products: [product].concat(currentProducts.products),
                        },
                      });
                    }
                  }
                },
              });
              onClose();
            }}
          />
        )}
      </Mutation>
      <button className={cs.close} onClick={onClose}>
        Sair
      </button>
    </div>
  </div>
);

export default AddProductForm;