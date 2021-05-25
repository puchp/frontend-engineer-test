import React, { FC, useState } from "react";
import { submitCart } from "../../services/cart";
import { InputCartType } from "../../types/Cart";

type CartPropsType = {};

const mockInput: InputCartType = {
  date: "2021-05-30",
  product: 1,
  locations: [
    {
      id: 1,
      quantity: 100,
    },
  ],
};

const Cart: FC<CartPropsType> = () => {
  const [isSubmitCart, setIsSubmitCart] = useState(false);

  const [responseInfo, setResponseInfo] = useState<any>(null);

  const handleSubmitCart = async () => {
    setIsSubmitCart(true);
    const response = await submitCart(mockInput);
    setIsSubmitCart(false);

    setResponseInfo(response);
    console.log({ response });
  };

  return (
    <div>
      "Cart component"
      <br />
      mockInput
      <br />
      <p>{JSON.stringify(mockInput)}</p>
      <br />
      {responseInfo && <p>{JSON.stringify(responseInfo)}</p>}
      <br />
      <button
        type="button"
        onClick={() => handleSubmitCart()}
        disabled={isSubmitCart}
      >
        submit cart
      </button>
    </div>
  );
};

export default Cart;
