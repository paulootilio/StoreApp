import React, { useState } from "react";
import cs from "./styles";

const ProcessStoreForm = ({
  initialName = "",
  initialAddress = "",
  disabled = false,
  onProcessStore,
  buttonText,
  loading,
}) => {
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  return (
    <div className={cs.form}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        disabled={disabled}
        className={cs.input}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        value={address}
        disabled={disabled}
        className={cs.input}
        onChange={(e) => setAddress(e.currentTarget.value)}
      />

      {loading ? (
        "...Loading"
      ) : (
        <button
          onClick={() => {
            onProcessStore({ name, address }), setName(""), setAddress("");
          }}
          className={cs.registration}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProcessStoreForm;
