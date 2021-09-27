import React from "react";
import { Mutation } from "react-apollo";
import { AddStoreMutation } from "./operations.graphql";
import ProcessStoreForm from "../ProcessStoreForm";
import { StoreQuery } from "../Shop/operations.graphql";
import cs from "./styles";

const AddStoreForm = ({ onClose }) => (
  <div className={cs.overlay}>
    <div className={cs.content}>
      <h2>Adicionar Loja</h2>
      <Mutation mutation={AddStoreMutation}>
        {(addStore, { loading }) => (
          <ProcessStoreForm
            buttonText="Adicionar Loja"
            loading={loading}
            onProcessStore={({ name, address }) => {
              addStore({
                variables: {
                  name,
                  address,
                },
                update: (cache, { data: { addStore } }) => {
                  {
                    const store = addStore.store;
                    if (store) {
                      const currentStores = cache.readQuery({
                        query: StoreQuery,
                      });
                      cache.writeQuery({
                        query: StoreQuery,
                        data: {
                          stores: [store].concat(currentStores.stores),
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

export default AddStoreForm;