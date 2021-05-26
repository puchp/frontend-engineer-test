import React, { FC, useState } from "react";
import { submitCart } from "../../services/cart";
import { InputCartType } from "../../types/Cart";

type CartPropsType = {
  cartInput: InputCartType;
};

const Cart: FC<CartPropsType> = (props) => {
  const { cartInput } = props;
  const [isSubmitCart, setIsSubmitCart] = useState(false);

  const [responseInfo, setResponseInfo] = useState<any>(null);

  const handleSubmitCart = async () => {
    setIsSubmitCart(true);
    const response = await submitCart(cartInput);
    setIsSubmitCart(false);

    setResponseInfo(response);
    console.log({ response });
  };

  return (
    <div>
      {responseInfo && <p>{JSON.stringify(responseInfo)}</p>}
      <br />
      <p>cartInput: {JSON.stringify(cartInput)}</p>
      <button
        type="button"
        onClick={() => handleSubmitCart()}
        disabled={isSubmitCart}
      >
        Submit
      </button>
    </div>
  );
};

export default Cart;
