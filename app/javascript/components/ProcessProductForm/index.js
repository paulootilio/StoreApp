import React, { useState } from "react";
import cs from "./styles";

const ProcessProductForm = ({
  initialName = "",
  initialDescription = "",
  initialPrice = "",
  disabled = false,
  onProcessProduct,
  buttonText,
  loading,
}) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  return (
    <div className={cs.form}>
      <input
        type="text"
        disabled={disabled}
        placeholder="Nome"
        value={name}
        className={cs.input}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        type="text"
        disabled={disabled}
        placeholder="Descrição"
        value={description}
        className={cs.input}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />

      <input
        type="number"
        disabled={disabled}
        placeholder="Preço"
        value={price}
        className={cs.input}
        onChange={(e) => setPrice(e.currentTarget.value)}
      />
      {loading ? (
        "...Loading"
      ) : (
        <button
          onClick={() => {
            onProcessProduct({ name, description, price }),
              setName(""),
              setDescription(""),
              setPrice(0);
          }}
          className={cs.registration}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ProcessProductForm;
