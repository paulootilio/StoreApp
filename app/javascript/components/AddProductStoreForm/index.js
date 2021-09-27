import React from "react";
import { Mutation } from "react-apollo";
import { AddProductStoreMutation } from "./operations.graphql";
import ProcessProductStoreForm from "../ProcessProductStoreForm";
import { ShopQuery } from "../Shop/operations.graphql";
import cs from "./styles";

const AddProductStoreForm = ({
  initialStoreId,
  initialStoreName,
  onClose,
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Adicionar Estoque de Produto</h2>
      <Mutation mutation={AddProductStoreMutation}>
        {(addProductStore, { loading }) => (
          <ProcessProductStoreForm
            initialStoreId={initialStoreId}
            initialStoreName={initialStoreName}
            disabled={true}
            buttonText="Adicionar Produto"
            loading={loading}
            onProcessProductStore={(store_id, product_id, stock) => {
              addProductStore({
                variables: {
                  store_id,
                  product_id,
                  stock,
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

export default AddProductStoreForm;