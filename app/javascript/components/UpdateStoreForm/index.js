import React from "react";
import { Mutation } from "react-apollo";
import { UpdateStoreMutation } from "./operations.graphql";
import ProcessStoreForm from "../ProcessStoreForm";
import cs from "./styles";

const UpdateStoreForm = ({
  id,
  initialName,
  initialAddress,
  onClose,
}) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Editar Loja</h2>
      <Mutation mutation={UpdateStoreMutation}>
        {(updateStore, { loading }) => (
          <ProcessStoreForm
            initialName={initialName}
            initialAddress={initialAddress}
            buttonText="Editar Loja"
            loading={loading}
            onProcessStore={({ name, address }) => {
              updateStore({
                variables: {
                  id,
                  name,
                  address,
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

export default UpdateStoreForm;
