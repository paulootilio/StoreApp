import React from "react";
import { Mutation } from "react-apollo";
import { DeleteProductMutation } from "./operations.graphql";
import ProcessProductForm from "../ProcessProductForm";
import cs from "./styles";

const DeleteProductForm = ({
  id,
  initialName,
  initialDescription,
  initialPrice,
  onClose,
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Excluir Produto</h2>
      <Mutation mutation={DeleteProductMutation}>
        {(deleteProduct, { loading }) => (
          <ProcessProductForm
            initialName={initialName}
            initialDescription={initialDescription}
            initialPrice={initialPrice}
            disabled={true}
            buttonText="Excluir Produto"
            loading={loading}
            onProcessProduct={() => {
              deleteProduct({
                variables: {
                  id,
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

export default DeleteProductForm;
