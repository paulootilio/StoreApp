import React from "react";
import { Mutation } from "react-apollo";
import { DeleteStoreMutation } from "./operations.graphql";
import ProcessStoreForm from "../ProcessStoreForm";
import cs from "./styles";

const DeleteStoreForm = ({
  id,
  initialName,
  initialAddress,
  onClose,
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Excluir Loja</h2>
      <Mutation mutation={DeleteStoreMutation}>
        {(deleteStore, { loading }) => (
          <ProcessStoreForm
            initialName={initialName}
            initialAddress={initialAddress}
            disabled={true}
            buttonText="Excluir Loja"
            loading={loading}
            onProcessStore={() => {
              deleteStore({
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

export default DeleteStoreForm;
