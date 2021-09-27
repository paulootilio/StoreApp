import React from "react";
import { Mutation } from "react-apollo";
import { UpdateProductMutation } from "./operations.graphql";
import ProcessProductForm from "../ProcessProductForm";
import cs from "./styles";

const UpdateProductForm = ({
  id,
  initialName,
  initialDescription,
  initialPrice,
  onClose,
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Editar Produto</h2>
      <Mutation mutation={UpdateProductMutation}>
        {(updateProduct, { loading }) => (
          <ProcessProductForm
            initialName={initialName}
            initialDescription={initialDescription}
            initialPrice={initialPrice}
            buttonText="Editar Produto"
            loading={loading}
            onProcessProduct={({ name, description, price }) => {
              updateProduct({
                variables: {
                  id,
                  name,
                  description,
                  price: parseFloat(price),
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

export default UpdateProductForm;
